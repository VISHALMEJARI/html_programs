var a=10;
console.log("a value is ="+a);
var a=20;
console.log("a value is ="+a);

let a=10;
console.log("a value is ="+a);
var a="vasantdada";
console.log("a value is ="+a);

for(var a=0;a<=5;a++){
    console.log("a value is ="+a)//here scope of "a" variable is local
}
console.log("a value is="+a)//here scope of "a" global
 
for(var a = 0;a<=5; a++){
    console.log("a value is="+a) // here scope of a variableis local
}

console.log("a value is="+a )  //here scope of a global