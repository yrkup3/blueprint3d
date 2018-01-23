var assert = require('assert');
global.THREE = require('three');

describe('Item', function () {
  describe('#resize()', function() {
    it('should throw Error when the scale is invalid', function() {
      var FloorItem = require('../src/items/floor_item');
      var item = new FloorItem();
      assert.throws(item.resize(1, 1, -1), /scale/, 'unexpected error');
    });
  });
});
