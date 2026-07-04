/// <reference types="vite/client" />

// vite.config.ts의 define으로 주입되는 앱 버전(package.json version).
declare const __APP_VERSION__: string;

// vite.config.ts의 define으로 주입되는 빌드 시각(로컬 `YYYY-MM-DD HH:mm`).
declare const __BUILD_TIME__: string;
