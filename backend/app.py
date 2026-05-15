# backend

from fastapi import FastAPI
from pydantic import BaseModel, EmailStr
from typing import List
import smtplib
from email.mime.text import MIMEText

app = FastAPI()

class ShareRequest(BaseModel):
    emails: List[EmailStr]
    message: str

@app.post("/share")
def share_flashcards(data: ShareRequest):
    
    sender_email = "your_email@gmail.com"
    sender_password = "your_app_password"  # use app password, NOT real password

    for recipient in data.emails:
        msg = MIMEText(data.message)
        msg["Subject"] = "Flashcards Shared With You 📚"
        msg["From"] = sender_email
        msg["To"] = recipient

        try:
            with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
                server.login(sender_email, sender_password)
                server.sendmail(sender_email, recipient, msg.as_string())
        except Exception as e:
            return {"status": "error", "detail": str(e)}

    return {"status": "success", "sent_to": data.emails}