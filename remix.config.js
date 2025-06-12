/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: "app",
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs",
  dev: { port: process.env.HMR_SERVER_PORT || 8002 },
  future: {},
};
