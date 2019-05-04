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
let queryString = "insert into sevensTable (sevensColumn) VALUES (8);"
db.serialize(function() {
  db.run("insert into sevensTable (sevensColumn) VALUES (9);")
  
});
