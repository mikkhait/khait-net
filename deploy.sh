#!/bin/bash
set -e

# Configuration
PROJECT_ID="khait-personal"
REGION="us-west1"
SERVICE_NAME="website"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting deployment process...${NC}"

# Build the container
echo -e "${BLUE}📦 Building container...${NC}"
gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_NAME

# Deploy to Cloud Run
echo -e "${BLUE}🌎 Deploying to Cloud Run...${NC}"
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$SERVICE_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --project $PROJECT_ID

echo -e "${GREEN}✅ Deployment complete!${NC}"

# Get the URL
URL=$(gcloud run services describe $SERVICE_NAME --platform managed --region $REGION --format 'value(status.url)')
echo -e "${GREEN}🌐 Your website is live at: ${BLUE}$URL${NC}" 