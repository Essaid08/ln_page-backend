FROM node:20-alpine

WORKDIR /back_end

COPY package*.json ./

COPY .env .env

RUN npm install

COPY . .

EXPOSE 3001


CMD [ "npm" , "run" , "dev" ]