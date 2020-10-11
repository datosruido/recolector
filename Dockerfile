FROM node:14.13.1-stretch-slim
# Directorio de trabajo
WORKDIR /usr/src/app
# Dependencias
COPY package*.json .
RUN npm install
# Código
COPY . .
# Puerto
EXPOSE 80
# Inicio
CMD ["node", "server.js"]