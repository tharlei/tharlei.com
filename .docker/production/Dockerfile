# syntax=docker/dockerfile:1
#
# Production image for tharlei.com (static Vite SPA served by nginx).
# Build from the repository root so the build context includes the source:
#
#   docker build -f .docker/production/Dockerfile -t tharlei.com:latest .
#   docker run --rm -p 8080:8080 tharlei.com:latest
#
# Multi-stage: Node builds the static bundle, nginx serves it. The final
# image carries only the compiled assets + nginx (no Node, no node_modules).

# ---------- Stage 1: build the static bundle ----------
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies first for better layer caching. devDependencies are
# required here because Vite/TypeScript run at build time. `npm ci` installs
# exactly what package-lock.json pins (reproducible builds).
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source and produce ./dist
COPY . .
RUN npm run build

# ---------- Stage 2: runtime (nginx, non-root) ----------
# nginx-unprivileged runs as UID 101 and listens on 8080 — no root, no
# capabilities needed, safe to run with a read-only root filesystem.
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runtime

LABEL org.opencontainers.image.title="tharlei.com" \
      org.opencontainers.image.description="Personal site (static SPA on nginx)"

# Hardened, SPA-aware server config (replaces the stock default.conf).
COPY .docker/production/nginx.conf /etc/nginx/conf.d/default.conf

# Ship only the built assets.
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
