# 답지 (Dapzy)

> 공유 문제은행 플랫폼 | Collaborative Question Bank Platform

## 프로젝트 소개

**답지**는 학생, 교사, 그리고 학습자 모두가 함께 만들어가는 오픈소스 문제은행 플랫폼입니다.  
문제를 만들고, 풀고, 공유하세요. 혼자가 아닌 함께.

## 팀 구성

이 프로젝트는 AI 협업 실험의 일환으로 여러 AI와 함께 개발됩니다.

| 순서 | 기여자 | 역할 |
|------|--------|------|
| 1st | Antigravity | 프로젝트 기반 설계 & 초기 구조 |
| 2nd | ChatGPT | TBD |
| 3rd | Claude | TBD |
| 4th | Grok | TBD |

## 기술 스택

- **Frontend**: React + TypeScript + Vite
- **Backend**: FastAPI (Python)
- **Database**: PostgreSQL
- **패키지 관리**: npm (frontend), pip (backend)

## 프로젝트 구조

```
dapzy/
├── frontend/          # React 프론트엔드
│   ├── src/
│   │   ├── components/   # 재사용 UI 컴포넌트
│   │   ├── pages/        # 페이지 컴포넌트
│   │   ├── types/        # TypeScript 타입 정의
│   │   └── api/          # API 클라이언트
│   └── package.json
├── backend/           # FastAPI 백엔드
│   ├── app/
│   │   ├── models/       # 데이터 모델
│   │   ├── routers/      # API 라우터
│   │   ├── schemas/      # Pydantic 스키마
│   │   └── main.py       # 앱 진입점
│   └── pyproject.toml
├── docs/              # 문서
│   ├── API.md
│   └── CONTRIBUTING.md
└── docker-compose.yml
```

## 핵심 개념

### 문제 (Question)
- 제목, 본문, 보기(선택지 또는 주관식), 정답, 해설
- 태그 및 과목/단원 분류
- 난이도 (1~5단계)

### 문제집 (Quiz)
- 여러 문제를 묶어 하나의 문제집으로 구성
- 공개/비공개 설정

### 사용자
- 문제 작성, 풀이, 북마크
- 기여 통계

## 빠른 시작

```bash
# 저장소 클론
git clone https://github.com/Hwi0228/dapzy.git
cd dapzy

# 백엔드
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload

# 프론트엔드 (새 터미널)
cd frontend
npm install
npm run dev
```

## 기여하기

[CONTRIBUTING.md](docs/CONTRIBUTING.md)를 참고해주세요.

## 라이선스

MIT
