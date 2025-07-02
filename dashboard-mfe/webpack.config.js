const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devServer: {
        port: 3002,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "dashboard",
            filename: "remoteEntry.js",
            exposes: {
                "./Dashboard": "./src/components/Dashboard",
                "./MetricsCard": "./src/components/MetricsCard",
                "./DataTable": "./src/components/DataTable",
            },
            remotes: {
                designSystem: "designSystem@http://localhost:3001/remoteEntry.js",
            },
            shared: {
                react: { singleton: true },
                "react-dom": { singleton: true },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
};