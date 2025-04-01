# Use the official Nginx image
FROM nginx:latest

# Copy website files to Nginx's default web directory
COPY . /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
