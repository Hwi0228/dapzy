from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.core.database import get_db
from app.models.models import Question
from app.schemas.schemas import QuestionCreate, QuestionRead
import json

router = APIRouter()


@router.get("/", response_model=list[QuestionRead])
async def list_questions(
    skip: int = 0,
    limit: int = 20,
    subject: str | None = None,
    db: AsyncSession = Depends(get_db),
):
    query = select(Question).offset(skip).limit(limit)
    if subject:
        query = query.where(Question.subject == subject)
    result = await db.execute(query)
    questions = result.scalars().all()

    # choices/tags JSON 역직렬화
    out = []
    for q in questions:
        q_dict = {c.name: getattr(q, c.name) for c in q.__table__.columns}
        q_dict["choices"] = json.loads(q.choices) if q.choices else None
        q_dict["tags"] = json.loads(q.tags) if q.tags else None
        out.append(q_dict)
    return out


@router.post("/", response_model=QuestionRead, status_code=201)
async def create_question(
    question_in: QuestionCreate,
    db: AsyncSession = Depends(get_db),
    # TODO: 인증 의존성 추가
):
    question = Question(
        **question_in.model_dump(exclude={"choices", "tags"}),
        choices=json.dumps(question_in.choices) if question_in.choices else None,
        tags=json.dumps(question_in.tags) if question_in.tags else None,
        author_id="00000000-0000-0000-0000-000000000000",  # TODO: 실제 인증 사용자로 교체
    )
    db.add(question)
    await db.commit()
    await db.refresh(question)
    return question


@router.get("/{question_id}", response_model=QuestionRead)
async def get_question(question_id: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Question).where(Question.id == question_id))
    question = result.scalar_one_or_none()
    if not question:
        raise HTTPException(status_code=404, detail="문제를 찾을 수 없습니다.")
    return question
