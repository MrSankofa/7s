var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sevens.sql');
 
db.serialize(function() {
  db.run("CREATE TABLE sevensTable (sevensColumn TEXT)");
 
  var stmt = db.prepare("INSERT INTO sevensTable VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run(7);
  }
  stmt.finalize();
 
  db.each("SELECT rowid AS id, sevensColumn FROM sevensTable", function(err, row) {
      console.log(row.id + ": " + row.sevensColumn);
  });
});
 
db.close();