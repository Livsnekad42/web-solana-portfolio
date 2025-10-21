
# Web3 Portfolio Monorepo (Showcase)

Модульный монорепозиторий для демонстрации Solana/Web3/Frontend навыков.
- **Next.js 15 + Zustand + TanStack Query**
- **Docker + CI/CD + FSD архитектура**
- Каждый проект — изолированный модуль с собственным Dockerfile
- Поддержка добавления внешних GitHub репозиториев через submodules

## Запуск
```bash
docker-compose up --build
```

## Добавление проекта
```bash
pnpm tsx scripts/add-project.mjs <git_url>
```
