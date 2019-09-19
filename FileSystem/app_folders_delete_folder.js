
const fs = require('fs');

fs.rmdir('tutorial',(err)=>{
    if(err)
        console.log(err);
    else {
        console.log(`folder deleted: `);
    }
});