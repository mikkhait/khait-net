# khait.net

Personal website hosted on Google Cloud Run.

## Local Development

1. Install Docker and Docker Compose:

   ```bash
   brew install docker docker-compose
   ```

2. Run locally:

   ```bash
   docker-compose up
   ```

3. View at <http://localhost:8080>

## Deployment

### Prerequisites

1. Install Google Cloud SDK:

   ```bash
   brew install --cask google-cloud-sdk
   ```

2. Authenticate and set project:

   ```bash
   gcloud auth login
   gcloud config set project khait-personal
   ```

### Deploy

#### Option 1: One-click deployment

```bash
chmod +x deploy.sh
./deploy.sh
```

#### Option 2: Manual deployment

```bash
# Build the container
gcloud builds submit --tag gcr.io/khait-personal/website

# Deploy to Cloud Run
gcloud run deploy website \
  --image gcr.io/khait-personal/website \
  --platform managed \
  --region us-west1 \
  --allow-unauthenticated
```

## Project Structure

```
.
├── static/
│   └── css/
│       └── style.css
├── index.html
├── nginx.conf
├── Dockerfile
├── docker-compose.yml
└── deploy.sh
```

## Tech Stack

- Plain HTML/CSS
- Nginx web server
- Docker for containerization
- Google Cloud Run for hosting

## Domain Configuration

- Domain: khait.net
- Managed via Google Domains
- Project: khait-personal
