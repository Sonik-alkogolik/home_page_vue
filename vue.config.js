module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  assetsDir: "",
  productionSourceMap: false,
  filenameHashing: true,
  lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    proxy: {
      '/api': {
        target: 'https://opt.naturepro.net',
        changeOrigin: true
      }
    }
  }
};
