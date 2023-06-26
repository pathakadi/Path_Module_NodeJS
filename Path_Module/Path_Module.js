const path = require("path") ;

// Absolute Path
console.log(__filename) ;
console.log(__dirname) ;

// File or Folder Name
console.log(path.basename(__filename)) ;
console.log(path.basename(__dirname)) ;

// Extension Name
console.log(path.extname(__filename)) ;
console.log(path.extname(__dirname)) ;

// Parse and Format (Like Slugify and Parse)
console.log(path.parse(__filename)) ;
console.log(path.format(path.parse(__filename))) ;

// Check the path is Absolute or Relative
console.log(path.isAbsolute(__filename)) ;
console.log(path.isAbsolute("./data.json")) ;

// Join
console.log(path.join(__dirname , "./home.js"))