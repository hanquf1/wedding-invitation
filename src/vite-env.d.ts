/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_NAVER_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}