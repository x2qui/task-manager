# HMCTS Task Manager

A full-stack case task management application built as part of the HMCTS developer challenge. This system allows caseworkers to manage, update, and track tasks efficiently using a modern UI and REST API.


# ✨ Features

- 📋 Create, view, update, and delete tasks
- 📁 Upload and download task attachments
- 🔍 Search by Task ID or Case Number
- 🎯 Filter tasks by status (Open, In Progress, Completed)
- 🧪 Unit and integration tests using Jest + Supertest
- ⚡ Built with React, TypeScript, Node.js, Express, and Prisma
- 💾 SQLite database (default)


# 🖥️ Tech Stack

# Frontend
- React + TypeScript
- Tailwind CSS
- Axios

# Backend
- Node.js + Express
- TypeScript
- Prisma ORM
- SQLite
- Multer (file uploads)

# Testing
- Jest
- Supertest


# 📚 How to use

Once the application is running:

### 1.Create a Task
- Use the form on the right-hand side.
- Enter the title, case number, description, due date, status, and optionally upload a file.
- Click "Create Task" to submit.
### View Tasks
- All created tasks will appear in the left column.
- Each task card displays title, case number, due date, and description.
### Search Tasks
- Use the search bar to find tasks by ID or Case Number.
### Filter Tasks
- Use the tabs at the top to filter by status: All Cases, Open Cases, In Progress, Completed.
### Update Status
- Click the status badge on any task card to cycle between statuses.
### Download Attachments
- If a task has a file, click “Download” to retrieve it.
### Delete Task
- Click the trash icon 🗑️ to delete a task.

## Getting Started
### Install frontend Dependencies
```bash
npm install
```

### Starting the app
```bash
npm start
```






