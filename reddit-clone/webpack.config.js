module.exports = {
    entry: "./app/assets/frontend/main.ts",
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    },
    resolve: {
      extensions: ['','.js','ts']
    },
    module: {
        preLoaders: [ { test: /\.ts$/, loader: 'tslint-loader' } ],
        loaders: [
            // Support for .ts files.
            {
              test: /\.ts$/,
              loader: 'ts-loader',
              query: {
                'ignoreDiagnostics': [
                  2403, // 2403 -> Subsequent variable declarations
                  2300, // 2300 -> Duplicate identifier
                  2374, // 2374 -> Duplicate number index signature
                  2375  // 2375 -> Duplicate string index signature
                ]
              },
              exclude: [ /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/ ]
            }
        ]
    }
};
