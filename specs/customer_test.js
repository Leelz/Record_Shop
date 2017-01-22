var Customer = require('../customer');
var Record_Shop = require('../recordShop');
var Record = require('../record');
var assert = require('assert');

describe('customer', function () {
  var record_shack;
  var customer;
  var record;
  var record2;
  var record3;
  var newStock;

  beforeEach(function () {
    harold = new Customer();
    record_shack = new Record_Shop('Record Shack', 'Edinburgh');
    record = new Record('Biffy Clyro', 'Machines', 10.00);
    record2 = new Record('Muse','Hullabaloo', 6.00);
    record3 = new Record('Rolling Stonres', "Sticky Fingers", 15.00);
    newStock = [record, record2, record3]
  });

  it('check customer can buy a record', function() {

    record_shack.addMultipleRecords(newStock);
    console.log(record_shack.records)
    harold.buyRecord(record_shack, record);

    assert.equal(1, harold.countRecords());
    assert.equal(90, harold.cash);
    assert.equal(2, record_shack.countRecords());
    assert.equal(5010, record_shack.balance);

  });

  // it('check customer can sell a record', function() {

  //   record_shack.addMultipleRecords(newStock);
  //   harold.buyRecord(record_shack, record);
  //   harold.sellRecord(record_shack, record);

  //   assert.equal(0, harold.countRecords());
  //   assert.equal(100, harold.cash);
  //   assert.equal(3, record_shack.countRecords());
  //   assert.equal(5000, record_shack.balance);

  // });

})