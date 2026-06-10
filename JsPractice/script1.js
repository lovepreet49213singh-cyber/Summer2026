
var person = {
    firstName,
    lastName,
    gender ,
    age,
    isStudent: false,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getAge: function() {
        return this.age;
    },
    setAge: function(newAge) {
        this.age = newAge;
    }
    
};
// console.log("Full Name:", person.fullName());
// function setvalues(fname,lname){
//     person.firstName=fname;
//     person.lastName=lname;
// }
// setvalues("John", "Doe");
// console.log("Full Name:", person.fullName());


// console.log("age",person .getAge());

// person.setAge(30);
// console.log("Age:", person.getAge());


function setPerson(fname, lname, age, isStudent){
    return {
        firstName: fname,
        lastName: lname,
        age: age,
        isStudent: isStudent
    };
}
var student1 = setPerson("Emily", "Johnson", 22, true);
var student2 = setPerson("Michael", "Brown", 28, true);
var father1 = setPerson("Robert", "Smith", 50, false);
var mother1 = setPerson("Linda", "Smith", 48, false);

console.log("Student 1:", student1);
console.log("Student 2:", student2);
for(var key in student1){
    console.log(key + ":", student1[key]);
}
var number=[10,20,30,40,50];
var marks = {"en":100,"math":90,"science":95};
console.log("Marks:", marks);
for(var subject in marks){
    console.log(subject + ":", marks[subject]);
    
}

var p1=Object.entries(student1);
console.log("Entries:", p1);
for(var i=0;i<p1.length;i++){
    console.log(p1[i][0] + ":", p1[i][1]);
}

var s20=new person();
var s21=new person(); 




