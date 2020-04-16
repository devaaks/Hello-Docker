# Specify the base image
FROM node:alpine

WORKDIR /usr/app

# Install dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command to start the app
CMD ["npm","start"]
