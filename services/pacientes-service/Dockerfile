# Multi-stage build para microservicio de pacientes
FROM node:18-alpine AS builder

# Instalar dependencias del workspace
WORKDIR /app
COPY package*.json ./
COPY libs/ libs/
COPY services/pacientes-service/ services/pacientes-service/

# Construir librerías compartidas
WORKDIR /app/libs/shared-domain
RUN npm install && npm run build

WORKDIR /app/libs/shared-db  
RUN npm install && npm run build

WORKDIR /app/libs/shared-events
RUN npm install && npm run build

# Construir servicio
WORKDIR /app/services/pacientes-service
RUN npm install && npm run build

# Imagen de producción
FROM node:18-alpine AS production

WORKDIR /app

# Copiar solo lo necesario para el servicio de pacientes
COPY --from=builder /app/libs/shared-domain/dist ./libs/shared-domain/dist
COPY --from=builder /app/libs/shared-db/dist ./libs/shared-db/dist  
COPY --from=builder /app/libs/shared-events/dist ./libs/shared-events/dist
COPY --from=builder /app/services/pacientes-service/dist ./dist
COPY --from=builder /app/services/pacientes-service/node_modules ./node_modules

# Configuración de runtime
ENV NODE_ENV=production
ENV PORT=3001
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3001/health || exit 1

# Usuario no-root para seguridad
USER node

CMD ["node", "dist/main.js"] 