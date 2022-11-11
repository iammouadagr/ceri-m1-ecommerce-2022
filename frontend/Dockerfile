### STAGE 1: Build ###
FROM node:16 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --outputPath=dist/frontend

# STAGE 2 : use the compiled app, ready for production with Nginx
FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/frontend/dist/frontend/ /usr/share/nginx/html