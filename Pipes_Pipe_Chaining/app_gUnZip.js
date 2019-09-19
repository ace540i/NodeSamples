const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('../FileSystem/tutorial/example2.txt.gz');
const writeStream = fs.createWriteStream('../FileSystem/tutorial/example3.txt');
readStream.pipe(gunzip).pipe(writeStream);