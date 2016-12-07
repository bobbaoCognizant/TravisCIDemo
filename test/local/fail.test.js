'use strict'
var assert = require('chai').assert;
var getValue = require('../../demo');

describe("demo unit test", () => {
  

  it("less than 5", function() {
    var result = getValue(3);
    assert.equal(result, 35);
  });

  it("greater than 10", function() {
    var result = getValue(56);
    assert.equal(result, 10);
  });

  it("5 to 10", function() {
    var result = getValue(7);
    assert.equal(result, 7);
  });
});

