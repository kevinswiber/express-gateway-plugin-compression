const compression = require('compression');

module.exports = {
  version: '1.0.0',
  policies: ['compression'],
  init: pluginContext => {
    pluginContext.registerPolicy({
      name: 'compression',
      policy: compression
    });
  }
};
