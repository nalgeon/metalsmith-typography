'use strict';

var assert = require('assert');
var equal = require('assert-dir-equal');
var Metalsmith = require('metalsmith');
var typography = require('..');

function check(name, done) {
  var path = 'test/fixtures/' + name;
  Metalsmith(path)
    .use(typography({
      lang: "en"
    }))
    .build(function(err){
      if (err) return done(err);
      equal(path + '/expected', path + '/build');
      done();
    });
}

describe('metalsmith-typography', function(){
  it('should enhance typography', function(done){
    check('basic', done);
  });

  it('should leave already typographed text untouched', function(done){
    check('untouched', done);
  });
});