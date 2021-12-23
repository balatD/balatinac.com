const babelConfig = {
  typescriptConfig: false,
  babelEsConfig: true,
  bundleJsConfig: true,
  copyToSitePackageConfig: true,
  copyVendorCssConfig: true,
  scssConfig: true,
  handlebarsConfig: true,
  hyphenopolyConfig: true,
  wasmConfig: true,
  imagesConfig: true,
  fontsConfig: false,
  videoConfig: false,
  browserSync: true,
  watchConfig: true,
};

const
  packageName = 'balatinac_sitepackage',
  paths = {
    src: './src',
    dest: './public'
  };

let typescriptConfig = {
  src: `${paths.src}/TypeScript/`,
  files: [
    'Default.ts'
  ],
  dest: `${paths.dest}/JavaScript`
};

let babelEsConfig = {
  srcs: [
    `${paths.src}/JavaScript/Controller/**/*.es6`,
    `${paths.src}/JavaScript/Controller/*.es6`,
    `${paths.src}/Hbs/modules/**/*.es6`,
    `${paths.src}/JavaScript/*.es6`
  ],
  concat: 'app.js',
  dest: `${paths.dest}/JavaScript`
};

let bundleJsConfig = {
  // Add path/file to include to bundle
  srcs: [
    './node_modules/prismjs/prism.js',
    './node_modules/swiper/swiper-bundle.js',
  ],
  concat: 'bundle.js',
  dest: `${paths.dest}/JavaScript`
};

let copyToSitePackageConfig = {
  src: [
    `${paths.dest}/Css/*`,
    `${paths.dest}/Fonts/**/*`,
    `${paths.dest}/Images/**/*`,
    `${paths.dest}/JavaScript/**/*`
  ],
  base: `${paths.dest}`,
  dest: `../../packages/${packageName}/Resources/Public/`
};

let copyVendorCssConfig = {
  files: [],
  // need to end on /
  dest: `${paths.src}/Scss/vendor/`
};

let scssConfig = {
  src: `${paths.src}/Scss/*.scss`,
  base: `${paths.src}/Scss`,
  dest: `${paths.dest}/Css/`
};

let handlebarsConfig = {
  src: `${paths.src}/Hbs/pages/*.hbs`,
  dest: `${paths.dest}`,
  data: {},
  options: {
    batch: [
      `${paths.src}/Hbs/modules`,
      `${paths.src}/Hbs/partials`
    ]
  },
  rename: {
    extname: '.html'
  }
};

let watchConfig = {
  src: `${paths.src}`,
  dest: `${paths.dest}`,
  css: [
    './src/Scss/**/*',
    './src/Hbs/**/*.scss',
    './src/TypeScript/**/*.ts'
  ],
  html: './src/Hbs/**/*',
  javascript: './src/**/*.es6',
  typescript: './src/**/*.ts'
};

let imagesConfig = {
  src: `${paths.src}/Images/**/*`,
  dest: `${paths.dest}/Images/`
};

// used to copy a video file
let videosConfig = null; /*
{
  src: `${paths.src}/Pdf/*`,
  // .mp4, .avi, .mov in .gitignore
  dest: `${paths.dest}/Pdf/`
};
*/

let fontsConfig = {
  src: [
    `${paths.src}/Fonts/*.*`,
  ],
  dest: `${paths.dest}/Fonts/`
};



module.exports = {
  babelConfig,
  typescriptConfig,
  babelEsConfig,
  bundleJsConfig,
  copyToSitePackageConfig,
  copyVendorCssConfig,
  scssConfig,
  fontsConfig,
  handlebarsConfig,
  imagesConfig,
  videosConfig,
  watchConfig
};
