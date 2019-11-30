const path = require('path');

module.exports = {
    configureWebpack: {
        entry: './ui/src/main.js',
        resolve: {
            alias: {
              '@': path.resolve(__dirname, 'ui/src/'),
            }
          }
    }
  }