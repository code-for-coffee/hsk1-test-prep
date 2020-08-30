# take a copy of linux w/Node v14.x LTS on it
FROM node:14

# define env vars
# ENV NODE_ENV=production

# define location of our app in this container
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# copy package & package-lock
COPY package*.json ./

# run install 
RUN yarn 

# build
RUN yarn build

# expose production port
EXPOSE 3000

CMD [ "yarn", "start" ]
