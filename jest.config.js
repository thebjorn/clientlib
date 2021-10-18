module.exports = {
    globals: {
        jQuery: require('jquery')
    },

    // setupFilesAfterEnv: [
    //     './src/test-setup.js'
    // ],
    testEnvironment: "jsdom",
    // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
    testURL: "http://localhost",
};
