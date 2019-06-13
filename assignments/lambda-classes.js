// CODE here for your Lambda Classes



class Person {
    constructor(attributes) {
        this.name=attributes.name;
        this.age=attributes.age;
        this.location=at.location;
    }
    speak(){
        console.log (`Hello my name is ${this.name}, I am from ${this.location}`);
    }
   
class Instructor extends Person{
    constructor()
}

// class Instructor{
//     constructor(instructAttributes) {
//         this.specialty=instructAttributes.specialty;
//     }
//     class Instructor extends Person{
//         super(instructAttributes);
//         this.Instructor=attributes.Instructor;
//     }
// }
