from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import questions, quizzes, auth, users
from app.core.config import settings

app = FastAPI(
    title="답지 API",
    description="공유 문제은행 플랫폼 API",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["인증"])
app.include_router(users.router, prefix="/users", tags=["사용자"])
app.include_router(questions.router, prefix="/questions", tags=["문제"])
app.include_router(quizzes.router, prefix="/quizzes", tags=["문제집"])


@app.get("/")
async def root():
    return {"message": "답지 API에 오신 것을 환영합니다!", "version": "0.1.0"}


@app.get("/health")
async def health_check():
    return {"status": "ok"}
