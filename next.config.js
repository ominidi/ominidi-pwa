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
      '~static': path.join(__dirname, 'static'),
      '~components': path.join(__dirname, 'components'),
      '~templates': path.join(__dirname, 'template'),
    };

    return config;
  },
});
