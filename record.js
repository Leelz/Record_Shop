// Create a constructor to create Record objects with artist, title, price x
// Create some new records x
// Create a RecordStore that has a name, city and multiple records in it's inventory x
// Give the RecordStore a balance i.e. cash in bank. x
// Add some records to your RecordStore. x
// Create a method that lists the inventory ? x

// Create a method so that the RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold x
// Create a method that reports on the financial situation of the store. Cash and value of inventory. x
// Create a RecordCollector (or customer) constructor who can buy and sell records. x
// If you choose to, you can use lodash for enumerable functionality. x
// Use TDD all the way through!


var Record = function (artist, title, price) {
  this.artist = artist;
  this.title = title;
  this.price = price;
}


module.exports = Record;