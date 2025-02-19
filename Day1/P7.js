const fs=require('fs');
const DEL=()=>{
    fs.unlinkSync('file.txt');
        
        console.log("deleted");
    
}
DEL();