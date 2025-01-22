// console.log("Welcome to node js application")

// const os = require('os')
// console.log(os.type());
// console.log(os.version());
// console.log(os.freemem());
// console.log(__dirname);
// console.log(__filename);
// console.log(os.cpus());

// const path = require('path')
// console.log(__dirname);
// console.log(__filename);
// console.log(path.dirname(__dirname));
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// const fs = require('fs')
// fs.readFile('one.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
    
// })

// const fs = require('fs')
// fs.writeFile('hello.txt','welcome to Node js File Module',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("file created and added text successfully");
    
// })

// const fs = require('fs')
// console.log("This is my first statement in console");
// const result = fs.readFileSync("one.txt",'utf8',(err,result)=>{
//     console.log(result)
// });
// console.log("this is my last console statement");

// const http = require('http')
// const PORT = 7788
// const Myserver = http.createServer((request,response)=>{
//     response.write("Backend application running successfully");
//     response.write("One more statement from node js");
//     response.end();
// })

// Myserver.listen(PORT,()=>{
//     console.log(`My server is running on port ${PORT}`)
// })

let {Add,Mul} = require("./Add")
console.log("Addition of 2 no is "+Add(10,20));
console.log("Multiplication of 2 no is "+Mul(10,20));


