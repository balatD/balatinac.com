import {src, dest} from 'gulp';

import {babelConfig, videosConfig} from '../../build-config';

/*
* @Desc     Copy videos to public
* */
let videos = callback => {
  if (!babelConfig.videoConfig) {
    console.log('Copying videos disabled by configuration');
    return callback();
  }
  console.log('Copying videos from ' + videosConfig.src + ' to ' + videosConfig.dest);
  return src(videosConfig.src)
    .pipe(dest(videosConfig.dest));
};

module.exports = videos;
