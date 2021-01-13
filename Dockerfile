# pull official base image
FROM node:13.12.0-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
RUN npm i -g serve

# add app & build
COPY . ./
RUN npm run build

# start app
CMD ["serve", "-l", "8081", "-s", "build"]
