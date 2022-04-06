module.exports = {
  outputDir: "dist",
  publicPath:'./',
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
      },
    },
  },
};
