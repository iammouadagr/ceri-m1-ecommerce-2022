### STAGE 1: Build ###
FROM node:16 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# STAGE 2 : use the compiled app, ready for production with Nginx
FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/www/ /usr/share/nginx/html
EXPOSE 8081
