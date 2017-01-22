var Customer = function () {
  this.records = []
  this.cash = 100
}

Customer.prototype = {
  countRecords: function() {
    return this.records.length;
  },
  findShopRecordIndex: function(recordShop, record) {
    shopStock = recordShop.records;
    recordIndex = shopStock.indexOf(record);
    return recordIndex
  },
  // buyRecord: function(recordShop, record) {
  //   toBuy = this.findShopRecordIndex(recordShop, record);
  //   shopStock = recordShop.records;
  //   boughtRecord = shopStock.splice(toBuy, 1)
  //   this.records.push(boughtRecord)
  //   this.cash -= record.price;
  //   recordShop.balance += record.price;
  // },

  buyRecord: function(recordShop, recordToFind) {
    var foundRecord = null;

    var shopStock = recordShop.records;

    shopStock.forEach(function (record) {
      if (record === recordToFind) {
        foundRecord = record;
      };
    }
  ); 
  this.records.push(foundRecord);
  var toRemove = shopStock.indexOf(foundRecord);
  shopStock.splice(toRemove, 1);
  this.cash -= foundRecord.price;
  recordShop.balance += foundRecord.price;
},


  findCustomerRecordIndex: function(record) {
      recordIndex = this.records.indexOf(record);
      return recordIndex
    },

  sellRecord: function(recordShop, record) {
    toSell = this.findCustomerRecordIndex(record);
    soldRecord = this.records.splice(toSell, 1)
    shopStock = recordShop.records;
    shopStock.push(soldRecord)
    this.cash += record.price;
    recordShop.balance -= record.price;
  },

}

module.exports = Customer;