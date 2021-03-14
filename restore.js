const os = require('os');
const process = require('process');

const core = require('@actions/core');

try {
    if (os.platform != 'win32') {
        core.warning('Not going to restore PATH variable on ${os.platform}');
        process.exit();
    }

    core.exportVariable('PATH', process.env.ORIG_PATH);
} catch (error) {
    core.setFailed(error.message);
}
