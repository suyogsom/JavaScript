// we can have object and function inside the object
// this funciton expression to create an object
let student = (firstName, lastName, age) => {
    return { firstName, lastName, age, 
               call(){ console.log("calling going on");}
           }     
   };
   
   let student1 = student("anup","patil",30);
   console.log(student1);
   
// another way to create object is using function Constructor 
function Student(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.call = () =>{ console.log("calling going on");}
}
   
let student2 = new Student("pankaj","jain",30);
console.log(student2);
