const path = require('path');

const config = require('./site.config');
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

module.exports = {
    context: path.join(config.root, config.paths.src),
    entry: {
        common: path.join(config.root, config.paths.src, '/bundle/common.js'),
        music: path.join(config.root, config.paths.src, '/bundle/music-page.js'),
        publications: path.join(config.root, config.paths.src, '/bundle/publications-page.js'),
        projects: path.join(config.root, config.paths.src, '/bundle/projects-page.js'),
        speaking: path.join(config.root, config.paths.src, '/bundle/speaking-page.js'),
    },
    output: {
        filename: './js/[name].[hash].js',
        path: path.resolve(__dirname, config.paths.dist)
    },
    mode: ['production', 'development'].includes(config.env) ?
        config.env :
        'development',
    devtool: config.env === 'production' ?
        'hidden-source-map' :
        'cheap-eval-source-map',
    devServer: {
        contentBase: path.join(config.root, config.paths.src),
        watchContentBase: true,
        hot: true,
        open: true,
        port: config.port,
        host: config.dev_host,
        overlay: true,
    },
    module: {
        rules: loaders,
    },
    plugins,
};
