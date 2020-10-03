import { LOCAL } from '../constants/environments';

export const ENV_NAME = process.env.ENV_NAME || LOCAL;

if (ENV_NAME === LOCAL) {
  require('dotenv').config({ silent: true });
}

export const PORT = process.env.PORT;

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
export const GCLOUD_STORAGE_BUCKET_URL = process.env.GCLOUD_STORAGE_BUCKET_URL;
export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
export const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
export const PG_PASSPHRASE = process.env.PG_PASSPHRASE;
