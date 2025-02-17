FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Create directory structure
RUN mkdir -p /usr/share/nginx/html/static/css

# Copy static files first
COPY static/ /usr/share/nginx/html/static/

# Copy main HTML file
COPY index.html /usr/share/nginx/html/

# Expose port 8080 for Cloud Run
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 