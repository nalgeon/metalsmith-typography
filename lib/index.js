'use strict';

var basename = require('path').basename;
var debug = require('debug')('metalsmith-typography');
var dirname = require('path').dirname;
var extname = require('path').extname;
var richtypo = require('richtypo');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Metalsmith plugin to enhance typography in HTML.
 *
 * @param {Object} options (optional)
 *   @property {String} lang
 * @return {Function}
 */

function plugin(options){
  options = options || {};
  if (options.lang) richtypo.lang(options.lang);

  return function(files, metalsmith, done){
    setImmediate(done);
    Object.keys(files).forEach(function(file){
      debug('checking file: %s', file);
      if (!isHtml(file)) return;
      var data = files[file];
      debug('applying typography rules to file: %s', file);
      var str = richtypo.rich(data.contents.toString());
      data.contents = new Buffer(str);
      files[file] = data;
    });
  };
}

/**
 * Check if a `file` is HTML.
 *
 * @param {String} file
 * @return {Boolean}
 */

function isHtml(file){
  return /\.html?/.test(extname(file));
}