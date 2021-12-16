//Arithmatic operator (let,var & const)
//Adding(+)
let f = 50 + 60;
document.getElementById("arithmaticaddlet").innerHTML = f;
var g = 60 + 80;
document.getElementById("arithmaticaddvar").innerHTML = g;
const h = 70 + 90;
document.getElementById("arithmaticaddconst").innerHTML = h;
//let
let i = 50;
let j = 90;
let k = i + j;
document.getElementById("arithmaticaddtwono").innerHTML = k;
//var
var l = 3;
var l = (100 + 50)*l;
document.getElementById("arithmaticaddmul").innerHTML = l;
//const
const n = "mohan";
const o = (50)*n;
document.getElementById("arithmaticstringmul").innerHTML = o;

//subtracting(-)
var p = 9;
var q = 5;
var r = p - q;
document.getElementById("arithmaticsubvar").innerHTML = r;

let pp = 100;
let qq = 45;
let rr =pp - qq;
document.getElementById("arithmaticsublet").innerHTML = rr;

const ppp = 150;
const qqq = 120;
const rrr = ppp-qqq;
document.getElementById("arithmaticsubconst").innerHTML = rrr;

//Multiplying(*)
var s = 5;
var t = 6;
var u = s*t;
document.getElementById("arithmaticmulvar").innerHTML = u;

let ss = 55;
let tt = 65;
let uu = ss*tt;
document.getElementById("arithmaticmullet").innerHTML = uu;

const sss = 50;
const ttt = 63;
const uuu = sss*ttt;
document.getElementById("arithmaticmulconst").innerHTML = uuu;

//dividing(/)
var v = 45;
var w = 56;
var x1 = v / w;
document.getElementById("arithmaticdivvar").innerHTML = x1; 

let vv = 450;
let ww = 568;
let x11 = vv / ww;
document.getElementById("arithmaticdivlet").innerHTML = x11; 

const vvv = 4500;
const www = 563;
const x111 = vvv / www;
document.getElementById("arithmaticdivconst").innerHTML = x111; 

//remainder-the modulus operator(%)
var v1 = 10;
var w1 = 15;
var x12 = v1 % w1;
document.getElementById("arithmaticremvar").innerHTML = x12; 

let vv1 = 25;
let ww1 = 36;
let x112 = vv1 % ww1;
document.getElementById("arithmaticremlet").innerHTML = x112; 

const vvv1 = 38;
const www1 = 23;
const x1112 = vvv % www;
document.getElementById("arithmaticremconst").innerHTML = x1112; 

//incrementing(++)

var y = 5;
y++;
var z = y;
document.getElementById("arithmaticincvar").innerHTML = z;

//decrementing(--)

let y1 = 5;
y1--;
let z1 = y1;
document.getElementById("arithmaticdeclet").innerHTML = z1;

//Exponentiation(**)

const y11 = 5;
const z111 = y11 ** 3;
document.getElementById("arithmaticexpconst").innerHTML = z111;

//Assignment operator var,let and const
var a = 10;
a += 5; 
document.getElementById("addvaluevar").innerHTML = a;
//let add
let aa = 15;
aa -= 20;
document.getElementById("addvaluelet").innerHTML = aa;

//let multiplying
let aaa = 45;
aaa *= 5;
document.getElementById("addvalueconst").innerHTML = aaa;

//var dividing
var aaa1 = 45;
aaa1 /= 5;
document.getElementById("divivaluelet").innerHTML = aaa1;

//let dividing
let aaa12 = 450;
aaa12 /= 9;
document.getElementById("divivaluevar").innerHTML = aaa12;

//var remainder
var b = 56;
b %= 5;
document.getElementById("remvaluevar").innerHTML = b;

//let remainder
let bb = 67;
bb %= 12;
document.getElementById("remvaluelet").innerHTML = bb;

//let Exponentiation 
let cc = 67;
cc **= 2;
document.getElementById("expvaluelet").innerHTML = cc;

//var Exponentiation 
var ccc = 45;
ccc **= 2;
document.getElementById("expvaluevar").innerHTML = ccc;

//shift right var
var d = 56;
d >> 45;
document.getElementById("shiftright").innerHTML = d;

//shift right let
let dd = 45;
dd >> 56;
document.getElementById("shiftrightlet").innerHTML = dd;

//shift left var
var d1 = 56;
d1 << 45;
document.getElementById("shiftleftvar").innerHTML = d1;

//shift left let
let dd1 = 45;
dd1 << 56;
document.getElementById("shiftleftlet").innerHTML = dd1;

//assign a value to c
var e = 98;
var f1 = 67;
var g = e;
g += e;
document.getElementById("assign").innerHTML = g;

//assign value in let

let e1 = 98;
let f11 = 67;
let g1 = e1;
g1 += e1;
document.getElementById("assignlet").innerHTML = g1;

//greaterthan sign

var h11 = 67;
var h1 = 58
h11 > h1;
document.getElementById("greaterthan").innerHTML = h11>h1;

//lessthan sign

let i2 = 670;
let j2 = 567;
i2 < j2;
document.getElementById("lessthan").innerHTML = i2 < j2;

//equal sign

var k3 = 45;
var k4 = 45;
k3 == k4;
document.getElementById("equalsign").innerHTML = k3 == k4;

//Bitwise Operator
//Bitwise AND(&)

var w1 = 1 & 6;
document.getElementById("bitwiseand").innerHTML = w1;

//Bitwise OR (|)
let b3 = 5 | 1;
document.getElementById("bitwiseor").innerHTML = b3;

//Bitwise XOR(^)
var c4 = 5 ^ 1;
document.getElementById("bitwisexor").innerHTML = c4;

//Bitwise NOT (~)
let d2 = ~5 ;
document.getElementById("bitwisenot").innerHTML = d2;

//(Zero Fill) Bitwise Left Shift (<<)
var e5 = 6 << 1 ;
document.getElementById("bitwiseleftshift").innerHTML = e5;

//(Zero Fill) Bitwise right Shift (>>)
var e55 = 7 >> 2;
document.getElementById("bitwiserightshift").innerHTML = e55;

//String Operator

var firstname = "mohan";
var lastname = "raj";
var fullname;
//document.getElementById("fullname").innerHTML = fullname;
document.getElementById("fullname").innerHTML = firstname + lastname;
//document.getElementById("fullname").innerHTML = lastname;

//singleanddoublequotes
 let f5 = "Lishventh"; //double quotes
 let f55 = 'mohan';  //single quotes
 document.getElementById("singleanddouble").innerHTML = f5 + f55;
 document.getElementById("singleanddouble").innerHTML = f5 +" " + f55;

 //JC Comparison operator

 //only equal value
 var v9 = 8;
 document.getElementById("comparison").innerHTML = (v9 == 5);

 let v8 = 7;
 document.getElementById("comparisonlet").innerHTML = (v8 == 7);

//only equal value and equal type
var v99 = 8;
document.getElementById("comparisonvar").innerHTML = (v99 === 5);

//not equal
let q6 = 9;
document.getElementById("notequal").innerHTML = (q6 != 8);

//not equal value and not equal type

var w5 = 8;
document.getElementById("notequalvalueandtype") .innerHTML = (w5 !== "mohan");

//Logical Operator
//AND (&&)
var g8 = 6;
var g9 = 10;
document.getElementById("logicand").innerHTML = (g8<5 && g9>9) + "<br>" + (g8 >7 && g9<5);

//OR(||)
var g7 = 12;
var g71 = 14;
document.getElementById("logicor").innerHTML = (g7<5 || g71>9) + "<br>" + (g7 > 7 || g71<5);