import {src, dest} from 'gulp';
import concat from 'gulp-concat';
import {wasmConfig, hyphenopolyConfig, babelConfig} from '../../build-config';

/*
* @Desc     Copy WebAssembly to public
* */
let wasm = callback => {
  if (!babelConfig.wasmConfig) {
    console.log('Copying wasm disabled by configuration');
    return callback();
  }
  console.log('Copying wasm from ' + wasmConfig.src + ' to ' + wasmConfig.dest);
  return src(wasmConfig.src)
    .pipe(concat(wasmConfig.concat))
    .pipe(dest(wasmConfig.dest));
};

/*
* @Desc     Copy hyphenopoly to public
* */
let hyphenopoly = callback => {
  if (!babelConfig.hyphenopolyConfig) {
    console.log('Copying hyphenopoly disabled by configuration');
    return callback();
  }
  console.log('Copying hyphenopoly from ' + hyphenopolyConfig.src + ' to ' + hyphenopolyConfig.dest);
  return src(hyphenopolyConfig.src)
    .pipe(dest(hyphenopolyConfig.dest));
};


module.exports = {wasm, hyphenopoly};
