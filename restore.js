import * as os from 'os';
import * as process from 'process';

import * as core from '@actions/core';

try {
    if (os.platform != 'win32') {
        core.warning('Not going to restore PATH variable on ${os.platform}');
        process.exit();
    }

    core.exportVariable('PATH', process.env.ORIG_PATH);
} catch (error) {
    core.setFailed(error.message);
}
