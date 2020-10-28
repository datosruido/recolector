FROM node:14.13.1-stretch-slim
# Directorio de trabajo
WORKDIR /usr/src/app
# Dependencias
COPY package.json .
COPY package-lock.json .
RUN npm install --production

# Environment variables
ENV SECRET=
ENV MONGODB_HOST=
ENV MONGODB_TLS=
ENV MONGODB_DATABASE=
ENV MONGODB_ADMINUSERNAME=
ENV MONGODB_ADMINPASSWORD=

# Código
COPY . .
# Puerto
EXPOSE 80
# Inicio
CMD npm run start
