import {src, dest} from 'gulp';

import {babelConfig, imagesConfig} from '../../build-config';

/*
* @Desc     Copy images to public
* */
let images = callback => {
  if (!babelConfig.imagesConfig) {
    console.log('Copying images disabled by configuration');
    return callback();
  }
  console.log('Copying images from ' + imagesConfig.src + ' to ' + imagesConfig.dest);
  return src(imagesConfig.src)
    .pipe(dest(imagesConfig.dest));
};

module.exports = images;
