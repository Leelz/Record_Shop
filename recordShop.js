var Record_Shop = function (name, city) {
  this.name = name;
  this.city = city;
  this.records = [];
  this.balance = 5000;
}

Record_Shop.prototype = {
  countRecords: function() {
    return this.records.length;
  },
  addOneRecord: function(record) {
    this.records.push(record);
    return this.records;
  },
  addMultipleRecords: function(records) {
    records.forEach(function (record) {
      this.records.push(record);
    }.bind(this));
    return this.records;
  },
  findRecordIndex: function(record) {
    recordIndex = this.records.indexOf(record);
    return recordIndex
  },
  sellRecord: function(record) {
    toRemove = this.findRecordIndex(record);
    this.records.splice(toRemove, 1)
    this.balance += record.price;
  },
  showFinancialStatus: function() {
    var inventoryValue = this.records.reduce(function(accum, record) {
    return accum + record.price;
    }, 0);
    return {
      inventoryValue: inventoryValue,
      balance: this.balance,
    }
  },
},

module.exports = Record_Shop;