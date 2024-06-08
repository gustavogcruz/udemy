FROM node:12-alpine
WORKDIR /app
#RUN addgroup dev && adduser -S -G gustavo dev
#USER gustavo
COPY package.json .
RUN apk add --no-cache python2 g++ make
#COPY yarn.lock .
RUN yarn install --production
COPY . .
CMD [ "node", "src/index.js" ]
EXPOSE 3000
