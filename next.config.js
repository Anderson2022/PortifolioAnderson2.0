/** @type {import('next').NextConfig} */
// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cursos.alura.com.br','d1ih8jugeo2m5m.cloudfront.net', 'placehold.it','drive.google.com','via.placeholder.com' ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[hash].[ext]',
          esModule: false,
        },
      },
    });

    return config;
  },
};
