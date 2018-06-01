FROM node:carbon
<<<<<<< HEAD
# Create app directory
WORKDIR /usr/src/app
=======

# Create app directory
WORKDIR /usr/src/app

>>>>>>> 119c80faa41a7407e2384b2497d98710a13a5be1
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production
<<<<<<< HEAD
# Bundle app source
COPY . .
EXPOSE 3000
=======

# Bundle app source
COPY . .

EXPOSE 8080
>>>>>>> 119c80faa41a7407e2384b2497d98710a13a5be1
CMD [ "npm", "start" ]