import { env } from '../env.interface';
import { defaultEnv } from './default.env';

export const productionEnv = (): env => ({
  ...defaultEnv(),
});
