import {dest, src} from 'gulp';

import rename from 'gulp-rename';
import {merge} from 'event-stream';
import replace from 'gulp-replace';

import {babelConfig, copyVendorCssConfig} from '../../build-config';

/*
* @Desc     copy vendor css files from node_modules to src,
*           to import in main.scss
* */
let copyVendorCss = callback => {
  if (!babelConfig.copyVendorCssConfig) {
    console.log('Copying vendor css disabled by configuration');
    return callback();
  }
  console.log('Copying vendor (s)css to ' + copyVendorCssConfig.dest);

  let files = copyVendorCssConfig.files.map(file => {
    let n = -1;
    return src(file.src)
      // get all lines with @import "functions"; and use function on each of them
      .pipe(replace(new RegExp(/@import .*/g), (match) => {
        // check if file inside an folder gets imported
        if ((n = match.lastIndexOf('/')) > -1) {
          // replace last older separater with separator and underscore
          // @import "outerfolder/innerfolder/file"; => @import "outerfolder/innerfolder/_file";
          match = match.substring(0, n) + '/_' + match.substring(n +1);
        } else {
          // replace double or single quote with double or single quote and underscore
          // @import "functions"; => @import "_functions";
          // @import 'functions'; => @import '_functions';
          match = match.replace(' "', ' "_').replace(' \'', ' \'_');
        }
        return match;
      }))
      .pipe(rename({ prefix: '_', extname: '.scss' }))
      .pipe(dest(copyVendorCssConfig.dest + file.dest));
  });

  return merge(files).on('end', callback);
}

module.exports = copyVendorCss;
