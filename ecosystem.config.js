module.exports = {
  apps: [
    {
      /* 개발 환경용 서버 */
      name: "artgarden", // pm2 이름
      cwd: "./", // 경로
      script: "npm",
      args: "run start:prod", // package.json 명령어 실행
      instances: 1, // 단일 쓰레드
      autorestart: false,
      watch: false,
      env: {
        Server_PORT: 3060,
        NODE_ENV: "local",
      },
    },
  ],
};