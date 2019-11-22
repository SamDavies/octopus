FROM node:11 as base

WORKDIR app
COPY package.json package.json
COPY yarn.lock yarn.lock

RUN npm install -g npm-cli-login

COPY .eslintignore .eslintignore
COPY .eslintrc .eslintrc
COPY .doczrc.js .doczrc.js
COPY gatsby-config.js gatsby-config.js
COPY webpack.config.js webpack.config.js
COPY ./src src/
COPY ./public public/

FROM base as lint
CMD ["yarn", "lint"]

FROM base as test
CMD ["yarn", "test"]


FROM base as publish

ARG GITHUB_TOKEN
ENV GITHUB_TOKEN=$GITHUB_TOKEN

RUN echo "//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN" > ~/.npmrc

CMD ["npm", "publish"]


