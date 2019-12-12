FROM node:11 as base

WORKDIR app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY .eslintignore .eslintignore
COPY .eslintrc .eslintrc
COPY now.json now.json
COPY .doczrc.js .doczrc.js
COPY gatsby-config.js gatsby-config.js
COPY webpack.config.js webpack.config.js
COPY .babelrc .babelrc
COPY rollup.config.js rollup.config.js
COPY ./src src/
COPY ./public public/

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

CMD ["npm", "publish"]

#################
# Deploy Static #
#################
FROM base as deploy-static
RUN yarn global add now

ARG NOW_TOKEN
ENV NOW_TOKEN=$NOW_TOKEN

RUN now --token $NOW_TOKEN -A now-docs.json --prod

CMD now --token $NOW_TOKEN --prod


