import { ENV_NAME } from '../../libs/env-vars';

const home = (_, res) => {
  res.json({
    service: 'Lockd Backend 🏡',
    version: '1.0',
    environment: ENV_NAME,
  });
};

export default home;
