export const Environment = {
  VITE_GOOGLE_KEY: import.meta.env.VITE_GOOGLE_KEY || 'https://rtb-global-api.int.rsquareon.com/',
  VITE_APP_PORT: 3000,
  VITE_NAVER_KEY: import.meta.env.VITE_NAVER_KEY || '',
} as const;