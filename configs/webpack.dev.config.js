const path = require('path');
const rootPath = (__dirname, './')

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    module: {
        rules: [
            // Compile TypeScript
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: '../configs/tsconfig.json'
                        }
                    }
                ],
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts']
    },
    output: {
        filename: 'jdev-ui-lib.js',
        path: path.resolve(rootPath, 'dist')
    }
}