const fs=require('fs');

fs.mkdir("mydir",(err)=>{
    if(err){
        console.log("error creating",err);
        
    }
    console.log("Directory successfully");
})
