const fs = require('fs');
const concat = require('concat-files');
const bundleFiles = [
  './dist/inline.bundle.js',
  './dist/polyfills.bundle.js',
  './dist/styles.bundle.js',
  './dist/main.bundle.js'
];
const distFilesToRemove = [
  './dist/inline.bundle.js',
  './dist/polyfills.bundle.js',
  './dist/styles.bundle.js',
  './dist/main.bundle.js',
  './dist/favicon.ico',
  './dist/index.html'
];

concat(bundleFiles, './dist/inlet.js', function (err) {
  if (err) throw err;
  console.log('concat files to inlet file done');
  distFilesToRemove.map(fs.unlinkSync);
  fs.copyFileSync('./src/inlet.html', './dist/inlet.html');
});
