FROM node:15-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV production

ENTRYPOINT [ "node", "app.js" ]