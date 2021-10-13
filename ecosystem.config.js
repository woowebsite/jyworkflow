module.exports = {
  apps: [
    {
      name: 'NodeServer',
      script: 'yarn',
      automation: false,
      args: 'workspace @monorepo/server run start',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
