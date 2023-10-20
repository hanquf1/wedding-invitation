export const Environment = {
  VITE_GOOGLE_KEY: import.meta.env.VITE_GOOGLE_KEY || 'https://rtb-global-api.int.rsquareon.com/',
  VITE_APP_PORT: 3000,
} as const;