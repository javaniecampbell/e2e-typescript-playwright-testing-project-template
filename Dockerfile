FROM mcr.microsoft.com/playwright:v1.33.0-focal

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

CMD ["npm", "test"]