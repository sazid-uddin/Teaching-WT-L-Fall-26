let arr = [1, 2, 3];

function myFunc(el) {
    console.log(el + 10);
}

arr.forEach(myFunc);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

console.log(person.firstName)
console.log(person["firstName"])
console.log(person.fullName())

let s1 = {
	name: "Rahim",
	cgpa: 3.5
}

let s2 = {
	name: "Karim",
	cgpa: 3.3
}

// let student_array = [s1, s2];
let student_array = [ 				// array of object
	{name: "Rahim", cgpa: 3.5},
	{name: "Karim", cgpa: 3.3},
	{name: "Nadia", cgpa: 3.6}
];

for (let student of student_array) {
	console.log(student.name + " " + student.cgpa);
}

for (let s of student_array) {
	console.log(s.name + " " + s.cgpa);
}

console.log(student_array[0].name) // accessing individual objects in an array