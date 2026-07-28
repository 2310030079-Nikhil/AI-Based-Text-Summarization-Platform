import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from app.routes import summarize

app = FastAPI()

# CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API Routes

app.include_router(summarize.router)

# Base Directory

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.dirname(__file__)
    )
)

# Frontend Dist Path

FRONTEND_DIST = os.path.join(
    BASE_DIR,
    "frontend",
    "dist"
)

# Serve Static Assets

app.mount(
    "/assets",
    StaticFiles(
        directory=os.path.join(
            FRONTEND_DIST,
            "assets"
        )
    ),
    name="assets",
)

# Serve React Frontend

@app.get("/")
async def serve_frontend():
    return FileResponse(
        os.path.join(
            FRONTEND_DIST,
            "index.html"
        )
    )