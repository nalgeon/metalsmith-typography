'use strict';

var debug = require('debug')('metalsmith-typography');
var extname = require('path').extname;
var richtypo = require('richtypo');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Typography rules
 */
var DEFAULT_RULES = ['save_tags', 'cleanup_before', 'lite', 'spaces_lite', 'spaces', 'quotes', 'abbrs', 'cleanup_after', 'restore_tags'];

/**
 * Metalsmith plugin to enhance typography in HTML.
 *
 * @param {Object} options (optional)
 *   @property {String} lang
 *   @property {Array}  rules
 * @return {Function}
 */

function plugin(options){
  options = options || {};
  if (options.lang) richtypo.lang(options.lang);
  var rules = options.rules || DEFAULT_RULES;

  return function(files, metalsmith, done){
    setImmediate(done);
    Object.keys(files).forEach(function(file){
      debug('checking file: %s', file);
      if (!isHtml(file)) return;
      var data = files[file];
      debug('applying typography rules to file: %s', file);
      var str = richtypo.richtypo(data.contents.toString(), rules);
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