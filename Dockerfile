FROM node:8.6.0-alpine

WORKDIR /var/www/vk/

COPY src src/
COPY package.json .
COPY vk-jewishizer-pm2.json .
COPY node_modules node_modules/

EXPOSE 10523

RUN npm install pm2 -g

CMD ["pm2-docker", "start", "vk-jewishizer-pm2.json"]
