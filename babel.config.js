module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["@babel/preset-env", {
                useBuiltIns: "usage",
                corejs: "3",
            }]
        ],
        plugins:  [
            ["@babel/transform-runtime", {
                corejs: "3"
            }],
        ],
        "ignore": [
            "node_modules"
        ],
        sourceMap: true,
    };
};
