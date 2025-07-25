# MERN Stack Deployment & Maintenance Guide

## 1. Preparing for Deployment

### Frontend (React)
- Use `.env.production` for production API endpoints.
- Run `npm run build` to create optimized static assets.
- Use code splitting (`React.lazy`, `Suspense`).

### Backend (Express)
- Store environment variables in `.env` (never commit this file).
- Use `helmet`, `cors`, and error handling middleware.
- Connect to MongoDB Atlas with a dedicated user.

## 2. Deployment

### Backend
- Deploy to Render/Railway/Heroku.
- Set environment variables via dashboard.
- Set up GitHub integration for CI/CD.
- Configure HTTPS (platforms provide SSL).
- Optionally set custom domains.

### Frontend
- Deploy `client/build` to Vercel/Netlify.
- Set public env variables in dashboard.
- Set up GitHub integration.
- Optionally set custom domains.

## 3. CI/CD

- Use GitHub Actions (`.github/workflows/ci-cd.yml`).
- Run tests, lint, and build on push.
- Deploy on successful builds.
- Set up staging/production branches as needed.

## 4. Monitoring & Maintenance

- Add `/health` endpoint for uptime checks.
- Integrate Sentry for error tracking.
- Use platform monitoring dashboards.
- Schedule regular dependency updates.
- Plan regular database backups (Atlas provides this).

## 5. Rollback

- Use platform's previous deployment rollback feature.
- Document rollback process here.
