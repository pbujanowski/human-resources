FROM node:16.18-alpine3.15 as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN npm install -g @angular/cli
RUN yarn build

FROM nginx:stable-alpine as production
COPY --from=build /app/dist/human-resources-client /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
