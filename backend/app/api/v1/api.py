from fastapi import APIRouter
from app.api.v1.endpoints import wineries

api_router = APIRouter()
api_router.include_router(wineries.router, prefix="/v1", tags=["Wineries"])