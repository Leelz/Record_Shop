var Record = require('../record');
var assert = require('assert');

describe('record', function () {
  var record;
  var record2;

  beforeEach(function () {
    record = new Record('Biffy Clyro', 'Machines', 10.00);
    record2 = new Record('Muse','Hullabaloo', 6.00);
  });

  it('check item has an artist', function() {
    assert.equal("Biffy Clyro", record.artist);
  });

  it('check item has an title', function() {
    assert.equal("Machines", record.title);
  });

  it('check item has an price', function() {
    assert.equal(10.00, record.price);
  });

})