from fastapi import FastAPI
from celery import Celery
import os

app = FastAPI(title="SaaS Worker Service")

# Celery configuration
celery_app = Celery(
    "worker",
    broker=os.getenv("REDIS_URL", "redis://localhost:6379"),
    backend=os.getenv("REDIS_URL", "redis://localhost:6379"),
    include=["tasks"]
)

@app.get("/")
async def root():
    return {"message": "SaaS Worker Service is running"}

@app.post("/jobs/send-email")
async def send_email_job(email_data: dict):
    """Trigger email sending job"""
    from tasks import send_email_task
    task = send_email_task.delay(email_data)
    return {"job_id": task.id, "status": "queued"}

@app.post("/jobs/generate-report")
async def generate_report_job(report_data: dict):
    """Trigger report generation job"""
    from tasks import generate_report_task
    task = generate_report_task.delay(report_data)
    return {"job_id": task.id, "status": "queued"}

@app.get("/jobs/{job_id}/status")
async def get_job_status(job_id: str):
    """Get job status"""
    result = celery_app.AsyncResult(job_id)
    return {
        "job_id": job_id,
        "status": result.status,
        "result": result.result if result.ready() else None
    }