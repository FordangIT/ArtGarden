module.exports = {
  apps: [
    {
      name: "artgarden",
      cwd: "./",
      script: "npm",
      args: "run start",
      instances: -1,
      autorestart: false,
      watch: false,
      env: {
        Server_PORT: 3060,
        NODE_ENV: "production",
      },
    },
  ],
};
