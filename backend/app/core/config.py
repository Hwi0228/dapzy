from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    # 앱
    app_name: str = "답지"
    debug: bool = False

    # 데이터베이스
    database_url: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/dapzy"

    # JWT
    secret_key: str = "CHANGE_ME_IN_PRODUCTION_USE_STRONG_SECRET"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30

    # CORS
    allowed_origins: list[str] = ["http://localhost:5173", "http://localhost:3000"]


settings = Settings()
