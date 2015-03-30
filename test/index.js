'use strict';

var assert = require('assert');
var equal = require('assert-dir-equal');
var Metalsmith = require('metalsmith');
var typography = require('..');

describe('metalsmith-typography', function(){
  it('should enhance typography', function(done){
    Metalsmith('test/fixtures/basic')
      .use(typography({
        lang: "en"
      }))
      .build(function(err){
        if (err) return done(err);
        equal('test/fixtures/basic/expected', 'test/fixtures/basic/build');
        done();
      });
  });
});