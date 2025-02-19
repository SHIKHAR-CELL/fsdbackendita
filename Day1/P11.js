const fs= require('fs/promises');
const write=async ()=>{
    const data="I am New le le hluwa Data"
    fs.writeFile("./data.txt",data,(err)=>{
        if(err)
            console.log("error writing data to file",err)
        else
        console.log("File updted successfully");
    });
};
write();