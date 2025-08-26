# 1. Use Node.js LTS image
FROM node:20

# 2. Set working directory
WORKDIR /usr/src/app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the source code
COPY . .

# 6. Build TypeScript to JavaScript
RUN npm run build

# 7. Expose the port your app uses
EXPOSE 3000

# 8. Start the compiled app
CMD ["node", "dist/index.js"]
