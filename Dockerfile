FROM node:12.18-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
EXPOSE 3000
CMD ["yarn", "start"]