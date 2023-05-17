const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {


    alias({
        '@src': 'src',
        '@app': 'src/app',
        '@config': 'src/config',
        '@service': 'src/service',
        '@components': 'src/app/components',
        '@pages': 'src/app/pages',

    })(config);

    return config;
}