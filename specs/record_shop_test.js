var Record_Shop = require('../recordShop');
var Record = require('../record');
var assert = require('assert');

describe('record', function () {
  var record_shack;
  var record;
  var record2;
  var record3;

  beforeEach(function () {
    record_shack = new Record_Shop('Record Shack', 'Edinburgh');
    record = new Record('Biffy Clyro', 'Machines', 10.00);
    record2 = new Record('Muse','Hullabaloo', 6.00);
    record3 = new Record('Rolling Stonres', "Sticky Fingers", 15.00);
    newStock = [record, record2, record3]
  });

  it('check shop has an name', function() {
    assert.equal("Record Shack", record_shack.name);
  });

  it('check shop has an city', function() {
    assert.equal("Edinburgh", record_shack.city);
  });

  it('check shops has records', function() {
    assert.deepEqual([], record_shack.records);
  });

  it('check shop has a balance', function() {
    assert.equal(5000.00, record_shack.balance);
  });

  it('check add records to inventory', function() {
    record_shack.addMultipleRecords(newStock);
    assert.equal(3, record_shack.countRecords());
  });

  it('can sell record', function() {
    record_shack.addMultipleRecords(newStock);
    record_shack.sellRecord(record);

    assert.equal(2, record_shack.countRecords());
    assert.equal(5010, record_shack.balance);

  });

  it('can show financial status', function() {
    record_shack.addMultipleRecords(newStock);
    shopFinance = record_shack.showFinancialStatus()
    assert.deepEqual({inventoryValue: 31, balance: 5000}, record_shack.showFinancialStatus());
  });

})