let num=10;

console.log(typeof num);

let n=234567890223456789098765432098765432n;
console.log(n);
///large numbers are stored by adding n to the end of that number;


let s=Symbol(100);
let s1=Symbol(100);
console.log(s1==s);//different memory address is assigned to different symbol variables do even when the items are same it will give false even s1 is storing same as s
s2=100;
s3="100";

console.log(s2==s3);
console.log(s2===s3);
console.log(typeof s);
let z=null;
console.log(typeof null);
let p;
console.log(typeof p)