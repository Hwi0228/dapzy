from fastapi import APIRouter

router = APIRouter()


@router.get("/me")
async def get_me():
    # TODO: 인증 구현 후 실제 사용자 반환
    return {"message": "인증 구현 후 사용 가능합니다."}
