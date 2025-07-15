from core.db import SessionLocal

def get_db_session():
    db = None
    try:
        db = SessionLocal()
        yield db
    finally:
        if db:
            db.close()