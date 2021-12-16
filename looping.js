//for loop incre
//for(let i=1; i<=15; i++){
   // if(i % 2 ==0 ) {
   // console.log("Even Number #" +i)
    //}
//}


//for loop text to display
const carss = [ "Maruthi","Volvo", "Fiat", "Ford" ];
let text = "" ;
for(let i=0; i < carss.length; i++) {
   text += carss[i] + "<br>";
}
document.getElementById("loopif").innerHTML = text;

//while loop
var z2 = 0;
var x3 = 0;

while(z2<3){
   z2++;
   x3 += n;
}
console.log(z2);
document.getElementById("while").innerHTML = z2;

//do while
let result = "";
let ii = 0;
do{
   ii = ii+1;
   result = result + ii;
} while (ii<9);

console.log(result);
document.getElementById("dowhile").innerHTML = result;

//for in
const result1 = "";
const object = {aa: 1, bb: 2, cc: 3};

for (const property in object) {
   console.log( `${property}: ${object[property]}`);
}
document.getElementById("forin").innerHTML = result1;

//for of
const array = ['a', 'b', 'c'];
for(const element of array) {
   console.log(element);
}
