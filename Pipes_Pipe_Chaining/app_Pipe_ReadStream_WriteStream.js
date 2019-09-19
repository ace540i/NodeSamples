const fs = require('fs');
const readStream = fs.createReadStream('../FileSystem/tutorial/example.txt','utf8');
const writeStream = fs.createWriteStream('../FileSystem/tutorial/example2.txt');
readStream.pipe(writeStream);