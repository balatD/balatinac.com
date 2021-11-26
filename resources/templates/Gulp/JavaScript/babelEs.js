import {src, dest} from 'gulp';

import babel from 'gulp-babel';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';

import {babelEsConfig, babelConfig} from '../../build-config';

const browser = browserSync.create();

/*
* @Desc   Compiles all .es6 files to js and copy to public
* @Src   \/hbs\/**\/*.es6
* @Src   \/js\/**\/*.es6
* */
let babelEs = callback => {
  if (!babelConfig.babelEsConfig) {
    console.log('Processing es6 files disabled by configuration');
    return callback();
  }
  console.log('Processing es6 files from ' + babelEsConfig.srcs + ' to ' + babelEsConfig.dest);

  if (babelEsConfig.srcs.length > 0) {
    return src(babelEsConfig.srcs)
      .pipe(babel({
        compact: false,
        presets: [
          [
            '@babel/preset-env',
            {
              'useBuiltIns': 'entry',
              'corejs': 3,
              "modules": "commonjs"
            }
          ]
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties'
        ]
      }))
      .pipe(concat(babelEsConfig.concat))
      .pipe(dest(babelEsConfig.dest))
      .pipe(browser.stream());
  } else {
    console.log('BundleES srcs is empty! Skipping this task!');
    return callback();
  }
};

module.exports = babelEs;

