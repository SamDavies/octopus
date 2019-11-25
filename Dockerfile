FROM node:11 as base

WORKDIR app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY .eslintignore .eslintignore
COPY .eslintrc .eslintrc
COPY .doczrc.js .doczrc.js
COPY gatsby-config.js gatsby-config.js
COPY webpack.config.js webpack.config.js
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
RUN yarn build

ARG NPM_TOKEN
ENV NPM_TOKEN=$NPM_TOKEN

RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc

CMD ["npm", "publish"]


