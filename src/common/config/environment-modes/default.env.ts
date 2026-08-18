import { env } from '../env.interface';

export const defaultEnv = (): env => ({
  PORT: Number(process.env.PORT) || 3000,
  FALLBACK_LANGUAGE: process.env.FALLBACK_LANGUAGE as string,
});
