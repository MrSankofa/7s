const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const dbPath = path.join(__dirname, '../sevens.sql')
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {

  if (err) {
    console.error(err.message)
  } else {
    console.log('connected to sevens.sql');
  }
})

// let queryString = `SELECT * FROM lorem`;
let queryString = "SELECT rowid AS id, sevensColumn FROM sevensTable"
db.serialize(function() {
  // db.get( queryString, function( err, result) {
  //   if (err) {
  //     console.log('this is the err', err);
  //   } else {
  //     console.log(`this is the result ${JSON.stringify(result)}`);
  //   }
  // });

  db.each(queryString, function(err, row) {
    console.log(row.id + ": " + row.sevensColumn);
});
});
