FROM node:14-alpine
WORKDIR /app
COPY web /app
RUN yarn install && yarn build

# --

FROM nginx:1.18-alpine
COPY web/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /app
