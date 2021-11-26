import {src, dest} from 'gulp';

import concat from 'gulp-concat';
import purgeSourcemap from '../Helper/purgeSourcemap';

import {babelConfig, bundleJsConfig} from '../../build-config';

/*
* @Desc     bundles JavaScript files and copy to public
* */
let bundleJs = callback => {
  if (!babelConfig.bundleJsConfig) {
    console.log('Bundleing js files disabled by configuration');
    return callback();
  }

  if (bundleJsConfig.srcs.length > 0) {
    console.log('Bundleing js files from ' + bundleJsConfig.srcs + ' to ' + bundleJsConfig.dest);
    return src(bundleJsConfig.srcs)
      .pipe(concat(bundleJsConfig.concat))
      .pipe(purgeSourcemap())
      .pipe(dest(bundleJsConfig.dest));
  } else {
    console.log('BundleJS srcs is empty! Skipping this task!');
    return callback();
  }
};

module.exports = bundleJs;
