import {src, dest} from 'gulp';

import rename from 'gulp-rename';
import handlebars from 'gulp-compile-handlebars';
import browserSync from 'browser-sync';

import {babelConfig, handlebarsConfig} from '../../build-config';

const browser = browserSync.create();

/*
* @Desc     Compiles .hbs to .html and copy to public
* */
let hbs = callback => {
  if (!babelConfig.handlebarsConfig) {
    console.log('Processing handlebars disabled by configuration');
    return callback();
  }
  console.log('Processing handlebars from ' + handlebarsConfig.src + ' to ' + handlebarsConfig.dest);
  return src(handlebarsConfig.src)
    .pipe(handlebars(handlebarsConfig.data, handlebarsConfig.options))
    .pipe(rename(handlebarsConfig.rename))
    .pipe(dest(handlebarsConfig.dest))
    .pipe(browser.stream());
};

module.exports = hbs;
