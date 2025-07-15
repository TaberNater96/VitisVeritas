from fastapi import FastAPI
from app.api.v1.api import api_router

app = FastAPI(
    title="Vitis Veritas API",
    description="FastAPI for Vitis Veritas, providing scientific terroir data and wine recommendations.",
    version="1.0.0"
)

@app.get("/")
def read_root():
    """
    Root endpoint for the API.
    """
    return {"message": "Hello World"}

app.include_router(api_router)