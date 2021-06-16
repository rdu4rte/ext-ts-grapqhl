FROM node:16

WORKDIR /app
# $ docker inspect $CONTAINER_NAME | grep IPAddress

COPY package.json ./
COPY yarn.lock ./
RUN yarn add argon2 --build-from-source
RUN yarn install

COPY . .

EXPOSE 3003

CMD ["yarn", "dev"]