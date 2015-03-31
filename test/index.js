'use strict';

var assert = require('assert');
var equal = require('assert-dir-equal');
var Metalsmith = require('metalsmith');
var typography = require('..');

function check(name, settings, done) {
  var path = 'test/fixtures/' + name;
  Metalsmith(path)
    .use(settings)
    .build(function(err){
      if (err) return done(err);
      equal(path + '/expected', path + '/build');
      done();
    });
}

describe('metalsmith-typography', function(){
  it('should enhance typography', function(done){
    check('basic', typography({
        lang: "en"
      }), done);
  });

  it('should leave already typographed text untouched', function(done){
    check('untouched', typography({
        lang: "en"
      }), done);
  });

  it('should work with custom typography rules', function(done){
    check('custom', typography({
        lang: "en",
        rules: ['save_tags', 'cleanup_before', 'lite', 'quotes', 'cleanup_after', 'restore_tags']
      }), done);
  });
});