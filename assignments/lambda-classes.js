// CODE here for your Lambda Classes

const fred = new Instructor({
    name: 'Fred',
    location:'Bedrock',
    age:37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: "Don't for get the homies"
});

class Person {
    constructor(attributes) {
        this.name=attributes.name;
        this.age=attributes.age;
        this.location=at.location;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from${this.location}`;
    }
}