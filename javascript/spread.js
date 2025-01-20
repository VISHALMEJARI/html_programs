// const arr=["one","two","three","four","five"];
// const newarr=["six","seven",...arr];
// console.log(newarr)

const sayhi=()=>{
    console.log("it is sayhi function")
}

const sayhello=()=>{
    console.log("beginning of the sayhello function")
    setTimeout(()=>{sayhi();},3000)
    console.log("end of the sayhello function")
}

sayhello(); //function calling