import {dest} from 'gulp';

import browserify from 'browserify';
import {merge} from 'event-stream';
import tsify from 'tsify';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import terser from 'gulp-terser';
import browserSync from 'browser-sync';
import babelify from 'babelify';
import {babelConfig, typescriptConfig} from '../../build-config';

const browser = browserSync.create();

let compileTypeScript = callback => {
  if (!babelConfig.typescriptConfig) {
    console.log('Transpiling ts files disabled by configuration');
    return callback();
  }
  console.log('Transpiling ts files from ' + typescriptConfig.src + ' to ' + typescriptConfig.dest);

  let files = typescriptConfig.files.map(file => {
    return browserify({
        entries: [typescriptConfig.src + file],
        debug: true
      })
      .require(require.resolve('three/build/three.module.js'), { expose: 'three' })
      .plugin(tsify, { target: 'es7'})
      .transform(
        babelify,
        {
          only: [
            "./node_modules/three/build/three.module.js",
            "./node_modules/three/examples/jsm/*"
          ],
          global: true,
          sourceType: "unambiguous",
          presets: ["@babel/preset-env"],
          plugins: ['@babel/plugin-transform-modules-commonjs']
        }
      )
      .bundle()
      .pipe(source(file))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(rename({ extname: '.js' }))
        .pipe(dest(typescriptConfig.dest))
        // Add transformation tasks to the pipeline here.
        .pipe(terser())
        .on('error', console.error)
        .pipe(rename({ extname: '.min.js' }))
      .pipe(sourcemaps.write('./'))
      .pipe(dest(typescriptConfig.dest))
      .pipe(browser.stream());
  });

  return merge(files).on('end', callback);
}

module.exports = compileTypeScript;
