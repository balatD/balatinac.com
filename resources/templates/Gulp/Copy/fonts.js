import {src, dest} from 'gulp';

import {babelConfig, fontsConfig} from '../../build-config';

/*
* @Desc     Copy fonts to public
* */
let fonts = callback => {
  if (!babelConfig.fontsConfig) {
    console.log('Copying fonts disabled by configuration');
    return callback();
  }
  console.log('Copying fonts from ' + fontsConfig.src + ' to ' + fontsConfig.dest);
  return src(fontsConfig.src)
    .pipe(dest(fontsConfig.dest));
};

module.exports = fonts;
