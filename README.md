Hosted on GCP App Engine - account mkhait@gmail.com

khait.net is on Google Domains


# How to deploy:

1. [Install GCP tools via brew](https://formulae.brew.sh/cask/google-cloud-sdk)
2. Authenticate with Google Cloud SDK `gcloud auth login`
3. Set default project `gcloud config set project khait-personal`
4. Run `gcloud app deploy`
5. View at https://khait-personal.uc.r.appspot.com
6. GCP Console: https://console.cloud.google.com/appengine/versions?project=khait-personal


# How to run locally

1. install node
2. install nodemon
3. npm install
4. npm dev
5. View at http://localhost:8080