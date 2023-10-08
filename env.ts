export const Environment = {
  VITE_GOOGLE_KEY: import.meta.env.VITE_GOOGLE_KEY || 'https://rtb-global-api.int.rsquareon.com/',
  VITE_APP_PORT: 3000,
} as const;

export const GOOGLE_ENV = {
  type: 'service_account',
  project_id: 'nth-station-400910',
  private_key_id: import.meta.env.VITE_PRIVATE_KEY_ID || '95fbe3185648391134ccf59ae45921325deddfe4',
  private_key: import.meta.env.VITE_PRIVATE_KEY || '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDB1El38C/fwmRs\n+kBriFKM+R/pDajaPe5q83j4GMfuRK2B9gHar2058cBVq6gI0StWWlkTR3beoq6O\naT0mS0Wk63b4RVDtJ5HilTjq3rfYOze3Kmd+UxhKwj+X3zxMHTA/KaLGOItF/3sq\nnuJN9FUh+MOoN2dF4nMmnJpymcsIxUudr5b46rF3x7FOx/5EXyl/NkLdXuAy4Fl8\nj+Agmt+ZKGFgAoZnokfIET5RjA5LPtG4AQd1oc7UhtYLNNo45qXKmFF2MfmARjoP\nXPwXtMP1rFH1Z6rVb9n4g/RYi87Eem3nqGO6WUekhEInZeIaXoeNbm5FlSdvejzh\nYBAtG2bFAgMBAAECggEAEzQSF1TvmU6sHnPov/6glyDzfWaCDSVHosb+fC4QWNXr\nDs4tvtnUi4IdGR/JpR38GjEXVCana0VY3/kjOtEIVF+TyOMtMmHSPU2ldveb5Utw\nqLAF0ukupfF61XQjiDL4HbnlS5g8jDHUpRNavnhvms8Hq3nZvH3EBNZNIv+DsxmU\nojNBTij2M2IGW8X66aDn1wpaly/MLWgdF4Q6myZq+gNJVPAdxWXRiCbV2U//zR1K\nxT05gE+OaithZHMmv4qeec2w/L7fuKtiP4nJuz/1sbHd4M12ixrWtJCJ6plLUKvX\nkZRx783qJk8oUOGen8/vlX1IflHbETvyWq86mcT83QKBgQD0H65dWm8CO/7lgTBy\ni6l045d1dxqcQyTiRLvx4QKcbSJzK7I5fT27O1nkFkJ22Aenp+sQCwozy46mazP6\nXK+G6fydOlSvSRzNcUCe/3+4AfrWKKt7XWyydnlQh564D1EsJKs5ro/BiD/dhgEH\nrKMtEPkxqQdTOMnlxO6eVxDV+wKBgQDLQjzbuhJSNiMsVBqTB+0K6neCEow0l11f\nf2AWzc6qsMOFjljySrqzMHtYLPEm9ctV9rHpKX7vYV+Ak1NtTBhJt8trRsqLK3y8\nqFxDqaBekLWPuTSK6s8UIiUx3c97fBCG0j8lEYKOlBLtSH0KoYRWSkXEaf6na8HS\nnHqy5A3aPwKBgQCX8gweMMZ9Vohdot5bvU/44BuKUlquvh/78Zolf86XPFo/4weo\nPqqomdVmYPB3dhi1oo9tSeHMwTsFnB4bC4t45rSDzCWfgFs8B+yXyiFdj2Xn3CJ3\nw3t/TLxPgkoo9+enGR+15E+3vq05nUmQ1EQwLatc3H8hrmwD5mI7Daf99wKBgQC6\nAJp6pNNBQmN7nFdZN4aXV6sXb+u38NA0pPaEx7+Y+ftiy7nft70UX4hwT2g7M/Do\ncMGsUhnj66KeobNVsK4FP9k6CWUuaBRU/Gi6To8AGsLbjCtl+KyZiwmokYfeQ9FH\n3zyDqntkCGMtmwk6YkYdRQiFTk4IXZbYKfQqooF+twKBgQDhlJallqhYK09bXHnA\nH1jnXpZkGD4w4z8Cwx490NSFERZ4gH9ssMo+s5GPuktGI6kZF6o7nCxTLITtLeHW\nSAJy5Rz0wloltczq9ZpBixpMJeuBEOowx/ETkbnzDImgPG/XuN+nv7TumpnHeyRg\n/t7CKhtrROWvBkCEINKMy90SkQ==\n-----END PRIVATE KEY-----\n',
  client_email: 'googleseets-wedding@nth-station-400910.iam.gserviceaccount.com',
  client_id: '117499582736659621135',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/googleseets-wedding%40nth-station-400910.iam.gserviceaccount.com',
  universe_domain: 'googleapis.com',
  api_key: 'AIzaSyDbUakq7QvxkI00Bq_GFqFsvbFD1Ii3dAM',
  sheet_id: '1OeetjgkvyqkN6oz8tJlunBpGuQ9wn6XUDtrZQTl6NFs',
};