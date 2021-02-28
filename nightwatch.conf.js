const path = require('path')

function generateScreenshotFilePath(nightwatchClient, basePath, imagePath) {
    return path.join(process.cwd(), basePath, imagePath)
}

const config = {
    custom_commands_path: [
        'node_modules/nightwatch-vrt/commands'
    ],
    custom_assertions_path: [
        'node_modules/nightwatch-vrt/assertions'
    ],
    src_folders: ['tests'],
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
            },
            visual_regression_settings: {
                generate_screenshot_path: generateScreenshotFilePath,
                latest_screenshots_path: 'tests/vrt/latest',
                latest_suffix: '',
                baseline_screenshots_path: 'tests/vrt/baseline',
                baseline_suffix: '',
                diff_screenshots_path: 'tests/vrt/diff',
                diff_suffix: '',
                threshold: 0,
                prompt: false,
                always_save_diff_screenshot: false
            }
        }
    }
}

module.exports = config
