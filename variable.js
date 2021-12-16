//variable var-number
var price1 = 60;
var price2 = 30;
var total = price1+price2;
document.getElementById("demo1").innerHTML= "the value of total is " +total;

//Redeclaring variables var possible
//var x = 5;

//var x = 9;

//document.getElementById("redeclaring").innerHTML = x;

//variable var-number and string
var pi = 3.14;
var person = "mohan";
var answer = 'yes i am!';
document.getElementById("demo2").innerHTML = pi + "<br>" + person + "<br>" + answer;

//variable var-number and string
var pi = 3.14;
var person = "mohan";
var total = pi + person;
document.getElementById("demo3").innerHTML = "The total value " +total;

//Declaring JS variables
var carname= "valvo";
document.getElementById("declaring").innerHTML = carname;

//one statement many variables
var person = "mohan", CarName = "Volvo", Prize = 200;
document.getElementById("one to many").innerHTML = person + CarName + Prize;

//span multiple line variables
var person = "mohan",
carName = "volvo",
price = 200;
document.getElementById("span multiple lines").innerHTML = person + CarName;

//string will be concated
var a = "mohan" +""+ "licha";
document.getElementById("concate").innerHTML = a;

//First number in quotes, the rest of the numbers will be treated as strings, and concatenated.
var b = "5" + 6 + 7;
document.getElementById("initial number string").innerHTML = b ;

//Last number in quotes
var c = 6 + 7 + "5"
document.getElementById("number string").innerHTML = c;

//variable let in 
let x = 5;
{
let x = 6;
}

document.getElementById("variable let1").innerHTML= x;


//with let, Redeclaring a variable in the same block is not allowed
//let x1 = 5;
//let x1 = 9;
//document.getElementById("variable let").innerHTML = x1;

//const  array
const cars = ["maruthi", "toyato", "volvo", "bmw"]
cars [0] = "benz";
cars.push ("volkswagen");
document.getElementById("constarray").innerHTML= cars;

//In const you can NOT reassign the array
try{
const cars = ["maruthi", "toyato", "audi", "volvo"]
cars = ["Honda", "BMW", "Jeep"]
}
catch (err){
    document.getElementById("constreassign").innerHTML = err;
}

//const object
const tvs = {type:"sony", model: "500", color:"white"};
tvs.color="red";
tvs.owner="Sony";
document.getElementById("constobject").innerHTML = tvs.color + tvs.owner;

//const object reassign
try {
    const tvs = {type:"sony", model: "500", color:"white"};
    tvs =  {type:"philips", model:"300", color:"red"}; 
}
catch (err) {
    document.getElementById("constobjectreassign").innerHTML = err;
}
