/**
 * Created by ¿Óª‹√» on 2018/3/25.
 */
const path = require('path');
module.exports = {
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    }
}