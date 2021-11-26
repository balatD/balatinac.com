import browserSync from 'browser-sync';

import {babelConfig} from '../../build-config';

const browser = browserSync.create();

/*
* @Desc     Reload BrowserSync on change @watch-task
* */
let browserSyncReload = callback => {
  if (!babelConfig.browserSync) {
    console.log('Browser sync disabled by configuration');
    return callback();
  }
  browser.reload();
}

module.exports = browserSyncReload;
