FROM node:16.18.1

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

CMD yarn start:dev