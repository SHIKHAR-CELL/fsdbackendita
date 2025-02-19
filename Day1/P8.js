const fs=require('fs');

fs.mkdir("mydir",(err)=>{
    if(err){
        console.err("error creating",err);
        return ;
    }
    console.log("Directory successfully");
})
