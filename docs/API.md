# API 문서

Base URL: `http://localhost:8000`

## 인증
- JWT Bearer Token 방식
- 헤더: `Authorization: Bearer <token>`

## 엔드포인트

### 문제 (Questions)

| Method | Path | 설명 |
|--------|------|------|
| GET | `/questions` | 문제 목록 조회 |
| POST | `/questions` | 문제 생성 |
| GET | `/questions/{id}` | 특정 문제 조회 |
| PUT | `/questions/{id}` | 문제 수정 |
| DELETE | `/questions/{id}` | 문제 삭제 |

### 문제집 (Quizzes)

| Method | Path | 설명 |
|--------|------|------|
| GET | `/quizzes` | 문제집 목록 조회 |
| POST | `/quizzes` | 문제집 생성 |
| GET | `/quizzes/{id}` | 특정 문제집 조회 |
| POST | `/quizzes/{id}/questions` | 문제집에 문제 추가 |

### 사용자 (Users)

| Method | Path | 설명 |
|--------|------|------|
| POST | `/auth/register` | 회원가입 |
| POST | `/auth/login` | 로그인 |
| GET | `/users/me` | 내 프로필 조회 |

## 데이터 모델

### Question
```json
{
  "id": "uuid",
  "title": "string",
  "content": "string",
  "question_type": "multiple_choice | short_answer | essay",
  "choices": ["string"],
  "answer": "string",
  "explanation": "string",
  "subject": "string",
  "tags": ["string"],
  "difficulty": 1,
  "author_id": "uuid",
  "created_at": "datetime",
  "updated_at": "datetime"
}
```

### Quiz
```json
{
  "id": "uuid",
  "title": "string",
  "description": "string",
  "is_public": true,
  "questions": ["Question"],
  "author_id": "uuid",
  "created_at": "datetime"
}
```
