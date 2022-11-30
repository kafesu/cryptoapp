FROM node:18
WORKDIR /cryptoapp
COPY . .
RUN npm install
CMD ["node", "/cryptoapp/app.js"]
EXPOSE 80
