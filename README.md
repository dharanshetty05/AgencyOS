# AgencyOS

AgencyOS is a full-stack **CRM / agency management platform** built for teams that run client work every day — track clients, projects, tasks, and activity in one place, with a clean REST API foundation you can scale.

> This repository currently contains the **Node.js + Express backend API** in `agencyos-backend/`. The React + Tailwind frontend is planned/being built separately.

## Key features

- **Secure auth** with JWT + role-based access control
- **Client management** (create, update, track)
- **Project management** (ownership, status, workflows)
- **Task management** (project execution in one view)
- **Activity logs** for accountability and history
- **Dashboard insights** endpoints for business visibility
- **REST API architecture** with a scalable folder structure (controllers/services/models/middlewares/routes)

## Tech stack

- **Frontend**: React.js + Tailwind CSS (planned)
- **Backend**: Node.js + Express.js
- **Database**: MongoDB + Mongoose
- **Auth**: JWT

## Getting started (local)

### Prerequisites

- Node.js (LTS recommended)
- MongoDB (local or Atlas)

### Install

```bash
cd agencyos-backend
npm install
```

### Environment variables

Create `agencyos-backend/.env`:

```bash
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/agencyos
JWT_SECRET=replace_with_a_long_random_secret
```

### Run the API

```bash
cd agencyos-backend
npm run dev
```

API will start on `http://localhost:5000` (default). Quick health check: `GET /` → `API Running...`

## API surface (high level)

- `POST /api/auth/*`
- `/api/clients`
- `/api/projects`
- `/api/tasks`
- `/api/logs`
- `/api/dashboard`

## Scripts

From `agencyos-backend/`:

- **dev**: `npm run dev` (nodemon on `src/server.js`)
- **test**: `npm test` (placeholder)

## Future improvements

- React dashboard UI + Tailwind design system
- Lead pipeline + automations (stages, follow-ups, reminders)
- Refresh tokens + session management, stricter RBAC permissions
- API docs (OpenAPI/Swagger) + request validation coverage
- Tests (unit/integration) and CI
- Docker setup for local onboarding in one command

---
