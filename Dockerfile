# 阶段1：构建环境
FROM node:20-alpine AS builder
WORKDIR /app

# 1. 安装依赖（利用层缓存）
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile

# 2. 复制源码并构建
COPY . .
RUN yarn build:prod

# 阶段2：生产环境
FROM node:20-alpine
WORKDIR /app

# 1. 仅复制生产所需文件
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json yarn.lock ./

# 2. 安全设置
RUN chown -R node:node /app
USER node

# 3. 健康检查
HEALTHCHECK --interval=30s CMD curl -f http://localhost:3000/health || exit 1

EXPOSE 3000
CMD ["node", "dist/main.js"]