const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
module.exports = withPlugins([
  [
    optimizedImages,
    {
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        speed: 3,
        strip: true,
        verbose: true,
      },
      imagesPublicPath: "/svg-url-encoder/_next/static/images/",
    },
  ],
  {
    assetPrefix: "/svg-url-encoder/",
    basePath: "/svg-url-encoder",
    env,
  },
]);
