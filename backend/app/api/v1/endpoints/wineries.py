from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.api import deps

router = APIRouter()

@router.get("/wineries")
def read_wineries(db: Session = Depends(deps.get_db_session)):
    """
    Placeholder endpoint to test the wineries route and DB session dependency.
    """
    return {"message": "Wineries endpoint is active and database session is ready."}