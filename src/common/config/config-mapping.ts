import { env } from './env.interface';
import { developmentEnv } from './environment-modes/development.env';
import { productionEnv } from './environment-modes/production.env';
import { stagingEnv } from './environment-modes/staging.env';

const environments: Record<string, () => env> = {
  development: developmentEnv,
  staging: stagingEnv,
  production: productionEnv,
};

export default (): env => {
  const envMode = process.env.NODE_ENV || 'development';
  const loadMode = environments[envMode] || developmentEnv;

  console.log(`configuration environment: ${envMode}`);
  return loadMode();
};
