import {src, dest} from 'gulp';

import rename from 'gulp-rename';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'gulp-cssnano';
import changed from 'gulp-changed';
import browserSync from 'browser-sync';
import nodeSass from 'node-sass';
import nodePackageImporter from 'node-sass-package-importer';
import purgeSourcemap from '../Helper/purgeSourcemap';

import {babelConfig, scssConfig} from '../../build-config';

sass.compiler = nodeSass;
const browser = browserSync.create();

/*
* @Desc     converts scss to css and copy to public
* */
let scss = callback => {
  if (!babelConfig.scssConfig) {
    console.log('Processing scss files disabled by configuration');
    return callback();
  }
  console.log('Processing scss files from ' + scssConfig.src + ' to ' + scssConfig.dest);
  return src(scssConfig.src, {base: scssConfig.base})
    .pipe(changed(scssConfig.src))
    .pipe(sass({
      importer: nodePackageImporter(),
      includePaths: [
        require('node-normalize-scss').includePaths,
        'node_modules'
      ]
    }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(purgeSourcemap())
    .pipe(dest(scssConfig.dest))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(cssnano())
    .pipe(dest(scssConfig.dest))
    .pipe(browser.stream());
}

module.exports = scss;
