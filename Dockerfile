# Node version
FROM node:18.12.1

# Copying Everything in the directory to Docker 
COPY . /opt/app

# Entrypoint
# Set the working directory for any subsequent ADD, COPY, CMD, ENTRYPOINT, or RUN instructions that follow it in the Dockerfile.
WORKDIR /opt/app


RUN npm install

RUN npm test


CMD node index.js

