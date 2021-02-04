FROM node:14-alpine

RUN mkdir -p /usr/src/server

WORKDIR /usr/src/server

COPY package*.json index.js ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "start"]