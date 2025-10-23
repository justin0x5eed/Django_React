# 使用 Node 20 LTS（支持 Vite）
FROM node:25

WORKDIR /app

# 复制 package.json 和锁文件（加快构建）
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制所有代码
COPY . .

# 构建产物（仅用于生产）
# RUN npm run build

# 启动开发服务器（开发阶段用）
CMD ["npm", "run", "dev"]

EXPOSE 5173

