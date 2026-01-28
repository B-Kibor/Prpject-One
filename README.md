# Multi-Tenant SaaS Platform

A complete multi-tenant SaaS platform built with modern technologies.

## 🏗️ Architecture

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend API**: Node.js + NestJS + TypeORM
- **Worker Service**: Python + FastAPI + Celery
- **Database**: PostgreSQL
- **Cache/Queue**: Redis
- **Authentication**: JWT + Refresh Tokens

## 🚀 Features

### Core Features
- ✅ User authentication & sessions
- ✅ Organizations/workspaces (multi-tenancy)
- ✅ Role-based access control (RBAC)
- ✅ Tenant-isolated data
- ✅ Background jobs (emails, reports)
- ✅ Rate limiting & audit logs

### Advanced Features
- 🔄 Stripe billing integration (planned)
- 🔄 Feature flags per tenant (planned)
- 🔄 Usage analytics dashboard (planned)
- 🔄 API keys for integrations (planned)

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+
- Python 3.11+
- Docker & Docker Compose
- PostgreSQL
- Redis

### 1. Clone and Setup
```bash
git clone <your-repo>
cd Project-One
cp .env.example .env
```

### 2. Start with Docker (Recommended)
```bash
docker-compose up -d
```

### 3. Manual Setup

#### Install Dependencies
```bash
# Root workspace
npm install

# API
cd apps/api && npm install

# Frontend
cd apps/web && npm install

# Worker
cd apps/worker && pip install -r requirements.txt
```

#### Start Services
```bash
# Start all services
npm run dev

# Or start individually:
npm run dev:api    # API on :3000
npm run dev:web    # Frontend on :3001
npm run dev:worker # Worker on :8001
```

## 📁 Project Structure

```
Project-One/
├── apps/
│   ├── api/           # NestJS Backend API
│   │   ├── src/
│   │   │   ├── auth/          # Authentication
│   │   │   ├── users/         # User management
│   │   │   ├── organizations/ # Multi-tenant orgs
│   │   │   └── main.ts
│   │   └── package.json
│   ├── web/           # React Frontend
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── store/         # Zustand state
│   │   │   └── utils/
│   │   └── package.json
│   └── worker/        # Python Worker Service
│       ├── main.py            # FastAPI app
│       ├── tasks.py           # Celery tasks
│       └── requirements.txt
├── docker-compose.yml
└── package.json       # Workspace root
```

## 🔐 Authentication Flow

1. User registers/logs in via `/auth/login`
2. API returns JWT access token + refresh token
3. Frontend stores tokens in localStorage
4. All API requests include `Authorization: Bearer <token>`
5. Multi-tenant data isolation via `organizationId`

## 🏢 Multi-Tenancy

- Each user belongs to an **Organization**
- All data queries are filtered by `organizationId`
- Role-based permissions: `owner`, `admin`, `member`
- Complete tenant data isolation

## 🔧 Background Jobs

The Python worker service handles:
- Email notifications
- Report generation
- Data cleanup tasks
- Analytics processing

## 📊 Database Schema

### Users Table
- `id` (UUID, Primary Key)
- `email` (Unique)
- `password` (Hashed)
- `firstName`, `lastName`
- `role` (owner/admin/member)
- `organizationId` (Foreign Key)

### Organizations Table
- `id` (UUID, Primary Key)
- `name` (Unique)
- `slug` (Unique)
- `settings` (JSON)
- `isActive` (Boolean)

## 🚦 API Endpoints

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration

### Users (Protected)
- `GET /users` - List organization users
- `GET /users/:id` - Get user details
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Organizations (Protected)
- `GET /organizations/:id` - Get organization
- `PUT /organizations/:id` - Update organization

## 🔄 Development Workflow

1. **API Changes**: Modify NestJS controllers/services
2. **Frontend Changes**: Update React components/pages
3. **Background Jobs**: Add new Celery tasks in worker
4. **Database Changes**: Update TypeORM entities

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Docker Production
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 🔒 Security Features

- JWT authentication with refresh tokens
- Password hashing with bcrypt
- Rate limiting (100 requests/minute)
- CORS protection
- Input validation
- SQL injection prevention (TypeORM)

## 📈 Scaling Considerations

- **Database**: Read replicas, connection pooling
- **API**: Horizontal scaling with load balancer
- **Worker**: Multiple Celery workers
- **Cache**: Redis clustering
- **Frontend**: CDN deployment

## 🧪 Testing

```bash
# API tests
cd apps/api && npm test

# Frontend tests
cd apps/web && npm test

# Worker tests
cd apps/worker && python -m pytest
```

## 📝 Next Steps

1. Add Stripe billing integration
2. Implement feature flags system
3. Build analytics dashboard
4. Add API key management
5. Set up monitoring & logging
6. Add comprehensive test suite

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Add tests
5. Submit pull request

## 📄 License

MIT License - see LICENSE file for details