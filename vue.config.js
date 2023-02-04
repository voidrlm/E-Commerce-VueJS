const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production" ? "/E-Commerce-VueJS/" : "/",
  transpileDependencies: ["vuetify"],
});
