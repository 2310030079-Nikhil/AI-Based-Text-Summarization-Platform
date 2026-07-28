from fastapi import APIRouter, UploadFile, File

from app.services.ai_service import summarize_text
from app.services.pdf_service import extract_text_from_pdf
from app.services.keyword_service import extract_keywords

from app.utils.analytics import generate_analytics

router = APIRouter()

# TEXT SUMMARIZATION

@router.post("/summarize/text")
async def summarize_text_api(
        text: str,
        length: str = "medium"
):

    summary = summarize_text(text, length)

    keywords = extract_keywords(text)

    analytics = generate_analytics(text, summary)

    return {
        "summary": summary,
        "keywords": keywords,
        "analytics": analytics
    }

# PDF SUMMARIZATION

@router.post("/summarize/pdf")
async def summarize_pdf(
        file: UploadFile = File(...),
        length: str = "medium"
):

    text = await extract_text_from_pdf(file)

    summary = summarize_text(text, length)

    keywords = extract_keywords(text)

    analytics = generate_analytics(text, summary)

    return {
        "summary": summary,
        "keywords": keywords,
        "analytics": analytics
    }