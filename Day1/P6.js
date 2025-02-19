const fs=require('fs');
const Apppend=()=>{
    fs.appendFile('file.txt',"hello bro",(err)=>{
        if(err) throw err;
        console.log("file written");
    });
}
Apppend();