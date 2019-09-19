const fs = require('fs');

//create a file
fs.writeFile('example.txt',"this is an example",(err)=>{
    if(err)
        console.log(err);
     else {
        console.log('File successfully created');
        //  fs.appendFile('example.txt','\nsome appended data',(err));
        // console.log('File successfully Appended');

        fs.readFile('example.txt','utf8',(err,file)=>{
            if(err)
                console.log(err);
            else
                console.log(file);
        });
    }
});

fs.copyFile('example.txt','example2.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('File successfully copied');
})

fs.unlink('example.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('File successfully Deletes');
})