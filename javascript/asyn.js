async function displayinfo(){
    x = await 10 + 20;
    return x;
}

let result = displayinfo();
result.then((data)=>{
    console.log(data)
}).catch(error=>{
    console.log(err)
})