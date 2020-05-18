FROM node:11 as base

WORKDIR app
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY .eslintignore .eslintignore
COPY .eslintrc .eslintrc
COPY .babelrc .babelrc
COPY rollup.config.js rollup.config.js
COPY src src
COPY example/src example/src
COPY example/now.json example/now.json
COPY example/package.json example/package.json
COPY example/yarn.lock example/yarn.lock
RUN yarn install

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
RUN yarn build:package

ARG NPM_TOKEN
ENV NPM_TOKEN=$NPM_TOKEN

RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc

CMD ["npm", "publish", "--access", "public"]

#################
# Deploy Static #
#################
FROM base as deploy-static
RUN yarn global add now@16.7.3

ARG NOW_TOKEN
ENV NOW_TOKEN=$NOW_TOKEN

CMD now --token $NOW_TOKEN -A now-static.json --prod


#################
# Deploy Docs #
#################
FROM base as deploy-docs
RUN yarn global add now@16.7.3
RUN yarn install-example && yarn build-example && yarn build-example

ARG NOW_TOKEN
ENV NOW_TOKEN=$NOW_TOKEN

CMD cd example && now --token $NOW_TOKEN --prod


