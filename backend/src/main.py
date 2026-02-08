from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Task(BaseModel):
    title: str
    description: str = ""
    completed: bool = False

tasks = []

@app.post("/tasks/")
def create_task(task: Task):
    tasks.append(task)
    return {"message": "Task created", "task": task}

@app.get("/tasks/")
def get_tasks():
    return tasks

@app.get("/")
def root():
    return {"message": "Todo API - Hackathon Phase II"}
