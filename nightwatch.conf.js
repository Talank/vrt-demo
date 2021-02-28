module.exports = {
    src_folders: ['test'],
    test_settings: {
        default: {
            selenium_host: '127.0.0.1',
            launch_url: 'http://localhost:3000',
            globals: {},
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                chromeOptions: {
                    args: ['disable-gpu'],
                    w3c: false
                }
            }
        }
    }
}
