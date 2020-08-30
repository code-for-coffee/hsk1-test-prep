# take a copy of linux w/Node v14.x LTS on it
FROM node:14

# define env vars
ENV NODE_ENV=production

# define location of our app in this container
WORKDIR /usr/src/app

# copy package & package-lock
COPY package*.json ./

# run install 
RUN yarn 

# build
RUN yarn build

# Bundle app source
COPY . .

# expose production port
EXPOSE 8080

CMD [ "yarn", "start" ]
