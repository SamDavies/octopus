FROM node:11 as base

WORKDIR app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY .eslintignore .eslintignore
COPY .eslintrc .eslintrc
COPY .babelrc .babelrc
COPY rollup.config.js rollup.config.js
COPY ./src src/


########
# Lint #
########
FROM base as lint
CMD ["yarn", "lint"]

########
# Test #
########
FROM base as test
CMD ["yarn", "test"]

###########
# Publish #
###########
FROM base as publish
RUN yarn build

ARG NPM_TOKEN
ENV NPM_TOKEN=$NPM_TOKEN

RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc

CMD ["npm", "publish"]


