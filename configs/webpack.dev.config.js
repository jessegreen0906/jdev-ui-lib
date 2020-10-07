const path = require('path');
const rootPath = (__dirname, './')

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    module: {
        rules: [
            // Lint and Compile TypeScript
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: '../configs/tsconfig.json'
                        }
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            configFile: path.resolve(rootPath, 'configs/eslintrc.json')
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            // Sass preprocessing
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js','.tsx', '.ts']
    },
    output: {
        filename: 'jdev-ui-lib.js',
        path: path.resolve(rootPath, 'dist'),
        // Exposes the library as a global variable.
        library: 'jdevUi'
    }
}