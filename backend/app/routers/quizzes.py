from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.core.database import get_db
from app.models.models import Quiz
from app.schemas.schemas import QuizCreate, QuizRead

router = APIRouter()


@router.get("/", response_model=list[QuizRead])
async def list_quizzes(skip: int = 0, limit: int = 20, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Quiz).where(Quiz.is_public == True).offset(skip).limit(limit))
    return result.scalars().all()


@router.post("/", response_model=QuizRead, status_code=201)
async def create_quiz(quiz_in: QuizCreate, db: AsyncSession = Depends(get_db)):
    quiz = Quiz(
        **quiz_in.model_dump(),
        author_id="00000000-0000-0000-0000-000000000000",  # TODO: 실제 인증 사용자로 교체
    )
    db.add(quiz)
    await db.commit()
    await db.refresh(quiz)
    return quiz


@router.get("/{quiz_id}", response_model=QuizRead)
async def get_quiz(quiz_id: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Quiz).where(Quiz.id == quiz_id))
    quiz = result.scalar_one_or_none()
    if not quiz:
        raise HTTPException(status_code=404, detail="문제집을 찾을 수 없습니다.")
    return quiz
