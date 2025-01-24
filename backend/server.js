// const express = require('express')
// const app = express();

// const PORT = 7788

// app.get("/",(request,response)=>{
//     response.send("Welcome to express js get method")
// })

// app.get("/getName",(request,response)=>{
//     response.send("My college name is Vasantdada Patil college of engg")
// })

// app.get("/getName/area",(request,response)=>{
//     response.send("Vasantdada from Mumbai")
// })

// app.listen(7788,()=>{
//     console.log(`My server is running on ${PORT} number`)
// })

// ______________________________________________________________

const express = require ('express')
const users = require ("./users.json")
const app = express();
const PORT = 8899

app.get("/users",(request,response)=>{
    return response.json(users)
})

app.get("/users/:id",(request,response)=>{
    const id = Number(request.params.id);
    const user = users.find((user)=>user.id===id)
    return response.json(user);
})

app.listen(PORT,()=>{
    console.log(`My server is running on port number ${PORT}`);
    
})

