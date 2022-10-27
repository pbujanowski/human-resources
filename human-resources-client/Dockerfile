FROM node:16.18-alpine3.15 as build

WORKDIR /app

ARG API_URL
ENV API_URL $API_URL

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN npm install -g @angular/cli
RUN yarn build

FROM nginx:stable-alpine as production

ARG CLIENT_PORT_EXPOSE
ENV CLIENT_PORT_EXPOSE $CLIENT_PORT_EXPOSE

COPY --from=build /app/dist/human-resources-client /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE ${CLIENT_PORT_EXPOSE}
CMD ["nginx", "-g", "daemon off;"]
