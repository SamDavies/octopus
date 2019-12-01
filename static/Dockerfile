FROM node:11 as base

WORKDIR app
COPY ./src src/

RUN yarn global add now

ARG NOW_TOKEN
ENV NOW_TOKEN=$NOW_TOKEN

CMD now --token $NOW_TOKEN --prod


