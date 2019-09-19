const fs = require('fs');

fs.readdir('tutorial',(err,files)=>{
    if(err)
        console.log(err);
    else {
        console.log(files);
        for(let file of files){
            fs.unlink('./tutorial/' + file,(err)=>{
                if(err) 
                    console.log(err);
                else{
                    console.log(`File Deleted : ${file}`);
                }
            });       
    };
    };
});