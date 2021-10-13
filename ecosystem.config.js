module.exports = {
  apps: [
    {
      name: 'NodeServer',
      script: 'yarn',
      automation: false,
      args: 'start',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
