import {src, dest} from 'gulp';

import {babelConfig, copyToSitePackageConfig} from '../../build-config.js';

let copyToSitePackage = callback => {
  if (!babelConfig.copyToSitePackageConfig) {
    console.log('Copying assets disabled by configuration');
    return callback();
  }
  console.log('Copying assets from ' + copyToSitePackageConfig.src + ' to ' + copyToSitePackageConfig.dest);
  return src(copyToSitePackageConfig.src, {
    base: copyToSitePackageConfig.base
  })
    .pipe(dest(copyToSitePackageConfig.dest));
};

module.exports = copyToSitePackage;
