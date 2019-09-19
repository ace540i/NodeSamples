const fs = require('fs');

fs.unlink('./tutorial/example.txt',(err)=>{
    if(err)
        console.log(err);
    else{
        console.log(`file deleted: `);
        fs.rmdir('tutorial',(err)=>{
            if(err)
                console.log(err);
            else {
                console.log(`folder deleted: `);
            }
        });
    }
})

