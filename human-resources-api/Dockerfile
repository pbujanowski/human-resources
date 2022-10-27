FROM node:16.18-alpine3.15 AS development

WORKDIR /usr/src/app

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install

COPY --chown=node:node . .

USER node

FROM node:16.18-alpine3.15 AS build

WORKDIR /usr/src/app

COPY --chown=node:node package.json yarn.lock ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm install -g @nestjs/cli

RUN yarn build

ENV NODE_ENV production

RUN rm -rf node_modules

RUN yarn install --production=true && yarn cache clean --all

USER node

FROM node:16.18-alpine3.15 AS production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main" ]