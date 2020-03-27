const path = require('path');
const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');

module.exports = withPlugins([
  [sass],
], {
  useFileSystemPublicRoutes: false,
  webpack(config) {
    /* eslint-disable-next-line */
    config.resolve.alias = {
      ...config.resolve.alias,
      '~public': path.join(__dirname, 'public'),
      '~components': path.join(__dirname, 'components'),
      '~templates': path.join(__dirname, 'template'),
    };

    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    });

    return config;
  },
});
