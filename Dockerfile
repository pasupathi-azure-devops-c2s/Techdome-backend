# Step 1: Use an official Node.js image as the base image
FROM node:16

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install the backend dependencies
RUN npm install

# Step 5: Copy the rest of the backend application code
COPY . .

# Step 6: Expose the port on which the backend will run
EXPOSE 3000

# Step 7: Start the backend server (assumes `server.js` is the entry point)
CMD ["node", "server.js"]
