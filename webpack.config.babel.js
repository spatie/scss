import 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

module.exports = {
    entry: {
        'spatie': './spatie.scss',
    },
    output: {
        path: path.resolve(process.cwd(), 'build'),
        filename: '[name].css',
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader:  ExtractTextPlugin.extract('raw!postcss!sass'),
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin('spatie.css')
    ],
    postcss() {
        return [ autoprefixer ];
    }
};

