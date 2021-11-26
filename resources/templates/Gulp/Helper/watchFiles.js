import {watch} from 'gulp';

import scss from '../Css/scss';
import browserSyncReload from './browserSyncReload';
import handlebars from '../Html/handlebars';
import bundleJs from '../JavaScript/bundleJs';
import babelEs from '../JavaScript/babelEs';
import compileTypeScript from '../JavaScript/tsify';

import {babelConfig, watchConfig} from '../../build-config';

/*
* @Desc     Adds on change actions to file watcher
* */
let watchFiles = callback => {
  if (!babelConfig.watchConfig) {
    console.log('Watching files disabled by configuration');
    return callback();
  }
  console.log('Watching files in ' + watchConfig.src);
  watch(watchConfig.css, scss).on('change', browserSyncReload);
  watch(watchConfig.html, handlebars).on('change', browserSyncReload);
  watch(watchConfig.javascript, bundleJs).on('change', browserSyncReload);
  watch(watchConfig.javascript, babelEs).on('change', browserSyncReload);
  watch(watchConfig.typescript, compileTypeScript).on('change', browserSyncReload);
};

module.exports = watchFiles;
