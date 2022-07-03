// solution created for the require dotenv problem, stakoverflow link: https://stackoverflow.com/questions/59911706/module-not-found-error-cant-resolve-fs-in-node-modules-dotenv-lib 

require('dotenv').config();

module.exports = {
  env: {
    APP_TO_DO_BACK_URL: process.env.APP_TO_DO_BACK_URL
  }
}