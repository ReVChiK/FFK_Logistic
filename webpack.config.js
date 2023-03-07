const { resolve } = require('path');

module.exports = {
    mode: 'development',

    entry:{
        main: resolve(__dirname, './compile/index.js')
    },
    output:{
        path: resolve(__dirname, './dist'),
        filename: './assets/js/[contenthash].js'
    }
}