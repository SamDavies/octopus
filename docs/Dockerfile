FROM node:11 as base

WORKDIR app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY .eslintignore .eslintignore
COPY gatsby-config.js gatsby-config.js
COPY .nowignore .nowignore
COPY now.json now.json
COPY ./src src/

RUN yarn global add now
RUN yarn build

ARG NOW_TOKEN
ENV NOW_TOKEN=$NOW_TOKEN

CMD now --token $NOW_TOKEN --prod


