console.log("Hello")
// document.getElementById("");
// alert("abc");

let x; // automatically set to undefined (both value and type)
x = null; // null is manually set
let a = 5.0;
let b = 5.5;
let str = "AIUB";
let c = true;
let arr = [1,2,3];
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(str));
console.log(str);
console.log(typeof(c));
console.log(x);
console.log(typeof(x));
console.log(typeof(arr));

function fun() {
	console.log("hello");
}

let person = {
	name: "Rahim",
	age: 15
}
console.log(typeof(person));
console.log(typeof(fun));

let str1 = "My name is John";
// let str2 = "My name is "John"";
let str3 = 'My name is "John"';
let str4 = "The person's name is John";
let str5 ="The person's name is \"John\"";
let str6 ='The person\'s name is "John"';
// string -> class
// let str = "abc"; // str -> class's object
console.log(str6.length);
console.log(str6.toUpperCase());
console.log(str6.toLowerCase());