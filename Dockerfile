# Use the official Node.js image as the base image
FROM node:14

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json /app

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . /app

# Specify the default command to run when the container starts
CMD ["npm", "start"]