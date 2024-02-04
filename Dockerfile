FROM node:lts
LABEL authors="Benjamin Meißner <info@masonen.de>"

WORKDIR /app

COPY package-lock.json .
COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "deploy-start"]