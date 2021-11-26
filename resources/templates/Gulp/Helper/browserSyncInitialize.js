import browserSync from 'browser-sync';

import {babelConfig, watchConfig} from '../../build-config';

const browser = browserSync.create();

/*
* @Desc     Init BrowserSync with UI
* */
let browserSyncInitialize = callback => {
  if (!babelConfig.browserSync) {
    console.log('Browser sync disabled by configuration');
    return callback();
  }
  console.log('Initialize browser sync with base dir ' + watchConfig.dest);
  browser.init({
    watch: true,
    injectChanges: true,
    server: {
      baseDir: watchConfig.dest
    },
    open: false
  });
};



module.exports = browserSyncInitialize;
