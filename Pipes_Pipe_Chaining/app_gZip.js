const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('../FileSystem/tutorial/example.txt','utf8');
const writeStream = fs.createWriteStream('../FileSystem/tutorial/example2.txt.gz');
readStream.pipe(gzip).pipe(writeStream);