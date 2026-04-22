# Use Node 20 slim para o build
FROM node:20-slim AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Imagem final leve com Nginx para servir os arquivos estáticos
FROM nginx:alpine AS production

# Copia os assets buildados
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# ────────────────────────────────────────────────────────────────────────
# Estágio de desenvolvimento (mantém hot-reloading)
# Use: docker compose up
FROM node:20-slim AS development

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
