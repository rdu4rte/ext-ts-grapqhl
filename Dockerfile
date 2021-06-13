FROM node:14

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 3003

CMD ["yarn", "dev"]