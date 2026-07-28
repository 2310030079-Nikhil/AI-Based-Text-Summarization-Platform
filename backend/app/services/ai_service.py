import os

from dotenv import load_dotenv
from groq import Groq

load_dotenv()

api_key = os.getenv("GROQ_API_KEY")

client = Groq(
    api_key=api_key
)

def summarize_text(text, length="medium"):

    prompt = f"""
    Summarize the following text.

    Summary length: {length}

    Use professional bullet points.
    """

    response = client.chat.completions.create(

        model="llama-3.1-8b-instant",

        messages=[
            {
                "role": "system",
                "content": prompt
            },
            {
                "role": "user",
                "content": text
            }
        ]
    )

    return response.choices[0].message.content