const path = require('path');
const glob = require('glob');


module.exports = (env, argv) => ( 
    {
        mode: 'production',  // the only mode that works with the yesod environment
        entry: {
            input: './temp/index.tmp.js'   
        },
        output: {
            path: path.resolve(__dirname, 'temp'),
            filename: 'react.tmp.julius'
        },
        resolve: { 
            modules: [path.resolve(__dirname, "."), "node_modules"] },
        module: {
            rules: [
                { 
                    test: /\.(js|jsx)$/, 
                    exclude: /node_modules/, 
                    use: ["babel-loader"] 
                },
                {
                    test: /\.(css|scss)$/,
                    use: ["style-loader", "css-loader"],
                },
                { 
                    test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                    use: ["file-loader"] 
                }
            ]
        }
    }  
);


