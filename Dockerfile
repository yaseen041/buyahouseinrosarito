# Base image
FROM node:18-alpine AS dependencies

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Update npm and check versions
RUN npm install -g npm@latest
RUN npm --version
RUN node --version

# Clean npm cache
RUN npm cache clean --force

# Install dependencies (with legacy-peer-deps and force as fallback)
RUN npm ci --legacy-peer-deps || npm install --legacy-peer-deps || npm ci --force

# Copy the rest of the code
COPY . ./

# Build the Next.js app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
