//condition if,if else & else
var personOneAge = 56;
var personTwoAge = 78;

if (personOneAge > personTwoAge) {
    console.log('person one is older than person two');
}
else {
    console.log('person two is older than person one');
}
var personThreeAge = 67;

//if(personOneAge > personTwoAge && personOneAge > personThreeAge) {
   //console.log('person one is older than person two and person one is older than person three');
//}
//f(personTwoAge > personOneAge && personTwoAge > personThreeAge){
   // console.log('person two is older than person one and person two is older than person three');
//}
//if(personThreeAge > personOneAge && personThreeAge > personThreeAge){
   // console.log('person three is older than person one and person three is older than person two');
//}
if(personOneAge > personTwoAge && personOneAge > personThreeAge) {
    console.log('person one is older than person two and person one is older than person three');
}
else if (personTwoAge > personThreeAge) {
    console.log ('person two is older than person one and three');
}
else {
    console.log('person three is older than person one and two');
}
//switch case
const grade = "B";

switch (grade){
    case "S":
    console.log("Outstanding");
    break;
    case "A":
    case "B":
    console.log("Outstanding");
    break;
    case "C":
    console.log("Good");
    break;
    case "E":
    console.log("Just pass");
    break;
    case "U":
    console.log("Failed grade");
    break;
}
