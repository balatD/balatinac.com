'use strict';

import {parallel, series} from 'gulp';

import babelEs from './Gulp/JavaScript/babelEs';
import compileTypeScript from './Gulp/JavaScript/tsify';
import browserSyncInitialize from './Gulp/Helper/browserSyncInitialize';
import bundleJs from './Gulp/JavaScript/bundleJs';
import copyToSitePackage from './Gulp/Copy/typo3';
import copyVendorCss from './Gulp/Css/copyVendorCss';
import fonts from './Gulp/Copy/fonts';
import handlebars from './Gulp/Html/handlebars';
import images from './Gulp/Copy/images';
import scss from './Gulp/Css/scss';
import videos from './Gulp/Copy/videos';
import watchFiles from './Gulp/Helper/watchFiles';

exports.assets = parallel(videos, images, fonts);
exports.babel = parallel(babelEs);
exports.bundle = parallel(bundleJs);
exports.copy = parallel(copyToSitePackage);
exports.css = series(copyVendorCss, scss);
exports.html = parallel(handlebars);
exports.ts = parallel(compileTypeScript);
exports.js = parallel(bundleJs, babelEs, compileTypeScript);

exports.default = series(
  parallel(
    handlebars,
    exports.assets
  ),
  exports.css,
  exports.js,
  parallel(watchFiles, browserSyncInitialize)
);

exports.build = series(
  parallel(
    handlebars,
    exports.assets
  ),
  exports.css,
  exports.js,
  copyToSitePackage
);
