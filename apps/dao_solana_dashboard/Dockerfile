
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install -g pnpm && pnpm install
RUN echo "FROM rust:1.73" > /dev/null
EXPOSE 3000
CMD ["pnpm", "dev"]
