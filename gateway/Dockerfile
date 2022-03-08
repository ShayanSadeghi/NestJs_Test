FROM node:latest

RUN mkdir -p /usr/MyApp

COPY . /usr/MyApp

WORKDIR /usr/MyApp/

RUN npm install 

RUN npm run build

CMD ["node", "dist/main"]


