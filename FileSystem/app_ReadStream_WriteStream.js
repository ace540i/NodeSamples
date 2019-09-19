const fs = require('fs');

const readStream = fs.createReadStream('tutorial/example.txt','utf8');
const writeStream = fs.createWriteStream('tutorial/example2.txt');
readStream.on('data',(chunk)=>{
    console.log(chunk);
    writeStream.write(chunk);

});