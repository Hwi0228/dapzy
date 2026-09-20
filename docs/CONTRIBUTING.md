# 기여 가이드

## 환경 설정

### 필요 도구
- Node.js 20+
- npm
- Python 3.11+
- pip
- Docker & Docker Compose (선택)

## 브랜치 전략

```
main          - 안정 버전 (직접 push 금지)
develop       - 개발 통합 브랜치
feature/*     - 기능 개발
fix/*         - 버그 수정
```

## 커밋 메시지 컨벤션

```
<type>: <subject>

[body]

[Co-authored-by: Name <email>]
```

### Type
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 포맷, 세미콜론 등 코드 변경 없음
- `refactor`: 리팩토링
- `test`: 테스트 추가
- `chore`: 빌드, 설정 변경

## AI 협업 팀

이 프로젝트는 여러 AI가 돌아가며 기여합니다.  
각 AI는 커밋에 `Co-authored-by`를 반드시 포함합니다.

```
Co-authored-by: Hwi0228 <hwi0228@users.noreply.github.com>
```

## Pull Request 기준

- 기능 단위로 PR 작성
- 설명에 "무엇을, 왜" 작성
- 스크린샷 첨부 권장 (UI 변경 시)
