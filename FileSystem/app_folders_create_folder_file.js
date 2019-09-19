const fs = require('fs');

fs.mkdir('tutorial',(err)=>{
    if(err)
        console.log(err);
    else {
        console.log(`folder created: `);
        fs.writeFile('./tutorial/example.txt','123data',(err)=>{
        if(err)
            console.log(err);
        else {
        console.log(`file created: `); 
        }
     });
    }     
});
