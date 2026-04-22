# Entre Sites

Plataforma para conectar e gerenciar múltiplos sites com elegância.

## 🚀 Rodando localmente

### Pré-requisitos
- [Node.js 20+](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Com Docker (recomendado)

```bash
# Desenvolvimento (hot-reloading em http://localhost:5173)
docker compose up

# Produção local (Nginx em http://localhost:8080)
docker compose --profile prod up app-prod
```

### Sem Docker

```bash
npm install
npm run dev        # Desenvolvimento
npm run build      # Build de produção
npm run preview    # Preview do build
```

## 🔄 CI/CD Pipeline

O pipeline de deploy é automático via **GitHub Actions**:

1. **Push para `main`** → aciona o workflow
2. **Build** → Vite gera os assets em `dist/`
3. **Docker** → imagem publicada no Docker Hub com tag `latest` e SHA do commit
4. **Deploy FTP** → assets enviados para `ftp.entresites.com → /public_html/`

### Secrets necessários (GitHub → Settings → Secrets → Actions)

| Secret | Descrição |
|--------|-----------|
| `DOCKERHUB_USERNAME` | Seu usuário no Docker Hub |
| `DOCKERHUB_TOKEN` | Token de acesso do Docker Hub |
| `FTP_HOST` | `ftp.entresites.com` |
| `FTP_USER` | `EntreSites` |
| `FTP_PASS` | Senha FTP |
| `FTP_REMOTE_ROOT` | `/public_html/` |

## 🏗️ Estrutura do projeto

```
entre-sites/
├── .github/
│   └── workflows/
│       └── deploy.yml     # Pipeline CI/CD
├── src/
│   ├── App.tsx            # Componente principal
│   ├── App.css            # Estilos da landing page
│   └── index.css          # Design system global
├── Dockerfile             # Multi-stage build
├── docker-compose.yml     # Ambiente de desenvolvimento
├── nginx.conf             # Configuração do servidor web
└── vite.config.ts         # Configuração do Vite
```
