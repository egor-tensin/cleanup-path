import * as os from 'os';
import * as path from 'path';
import * as process from 'process';

import * as core from '@actions/core';

try {
    if (os.platform != 'win32') {
        core.warning('Not going to clean up PATH variable on ${os.platform}');
        process.exit();
    }

    let custom_paths = core.getInput('dirs');
    custom_paths = custom_paths.split(path.delimiter).filter(function(p) {
        return p.length != 0;
    });

    // This seems to be the default on new installations.
    // Also, MSYS2 does this.
    const default_paths = [
        'C:\\Windows\\system32',
        'C:\\Windows',
        'C:\\Windows\\System32\\Wbem',
        'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\',
    ];

    const add_default = core.getInput('default') == '1';

    let new_path = custom_paths;
    if (add_default) {
        new_path = new_path.concat(default_paths);
    }
    new_path = new_path.join(path.delimiter);

    core.exportVariable('ORIG_PATH', process.env.PATH);
    core.exportVariable('PATH', new_path);
} catch (error) {
    core.setFailed(error.message);
}
