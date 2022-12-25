FROM node:16
ENV PORT=8080
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]