FROM node:18.12.0-alpine
WORKDIR /map
ENV PATH="./node_modules/.bin:$PATH"
COPY  . .
RUN npm run
EXPOSE 3000
CMD [ "npm","start" ]