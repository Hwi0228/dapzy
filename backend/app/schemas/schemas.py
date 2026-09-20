import uuid
import json
from datetime import datetime
from typing import Optional
from pydantic import BaseModel, field_validator
from app.models.models import QuestionType


# ───── Question Schemas ─────

class QuestionBase(BaseModel):
    title: str
    content: str
    question_type: QuestionType
    choices: Optional[list[str]] = None
    answer: str
    explanation: Optional[str] = None
    subject: Optional[str] = None
    tags: Optional[list[str]] = None
    difficulty: int = 3


class QuestionCreate(QuestionBase):
    pass


class QuestionRead(QuestionBase):
    id: uuid.UUID
    author_id: uuid.UUID
    created_at: datetime
    updated_at: datetime

    model_config = {"from_attributes": True}


# ───── Quiz Schemas ─────

class QuizBase(BaseModel):
    title: str
    description: Optional[str] = None
    is_public: bool = True


class QuizCreate(QuizBase):
    pass


class QuizRead(QuizBase):
    id: uuid.UUID
    author_id: uuid.UUID
    created_at: datetime

    model_config = {"from_attributes": True}


# ───── User Schemas ─────

class UserCreate(BaseModel):
    username: str
    email: str
    password: str


class UserRead(BaseModel):
    id: uuid.UUID
    username: str
    email: str
    is_active: bool
    created_at: datetime

    model_config = {"from_attributes": True}


# ───── Auth Schemas ─────

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"


class LoginRequest(BaseModel):
    email: str
    password: str
