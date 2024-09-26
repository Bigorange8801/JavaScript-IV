// CODE here for your Lambda Classes



class Person {
    constructor(attributes) {
        this.name=attributes.name;
        this.age=attributes.age;
        this.location=attributes.location;
    }
    speak(){
        console.log (`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}
   
class Instructor extends Person{
    constructor(inAtts) {
        super(inAtts);
        this.specialty = inAtts.specialty;
		this.favLanguage = inAtts.favLanguage;
		this.catchPhrase = inAtts.catchPhrase;
    }
    demo(subject) {
		return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
		return `${student.name} recieves a perfect score on ${subject}`
	}
}

class Student extends Person{
    constructor(sAtts){
        super(sAtts);
        this.previousBackground=sAtts.previousBackground;
		this.className = sAtts.className;
		this.favoriteSubjects = sAtts.favoriteSubjects;
    }
    listsSubjects(){
       this.favoriteSubjects.forEach(element =>console.log(element)) ;
    }
    PRAssignment(subject){
		return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
		return `${this.name} has begun sprint challenge on ${subject}`;
	}
}
class ProjectManager extends Instructor{
    constructor(pmAtts){
        super(pmAtts);
        this.gradClassName=pmAtts.gradClassName;
        this.favInstructor=pmAtts.favInstructor;
    }
    standUp(slackChannel){
		return `${this.name} announces to ${slackChannel}, @channel standy times!`;
	}
}

const wade = new Student({
	"name": "Wade Watts",
	"age": "17",
	"location": "The Stacks",
	"gender": "M",
	"previousBackground": ["Oasis High School student, seeker of keys."],
	"className": "Full stack web dev",
	"favoriteSubjects": ["HTML", "CSS"]
});
const percy = new Student({
	"name": "Percy Jackson",
	"age": "12",
	"location": "New York",
	"gender": "M",
	"previousBackground": ["Camper at Camp Half Blood."],
	"className": "Full stack web dev",
	"favoriteSubjects": ["HTML", "Docker"]
});
const ash = new Student({
	"name": "Ash Ketchum",
	"age": "14",
	"location": "Pallet Town",
	"gender": "M",
	"previousBackground": ["Pokemon Trainer."],
	"className": "Full stack web dev",
	"favoriteSubjects": ["JavaScript", "CSS"]
});

const james= new Instructor({
	"name": "James Donovan Halliday",
	"age": "67",
	"location": "Oasis Creator",
	"gender": "M",
	"specialty": "Software enginer",
	"favLanguage": "C++",
	"catchPhrase": "Preparation is the only way to get ready!"
});

const chiron = new Instructor({
	"name": "Chiron",
	"age": "unknown",
	"location": "Camp Half Blood",
	"gender": "M",
	"specialty": "Centaur",
	"favLanguage": "Greek",
	"catchPhrase": "Names are powerful things.You don't go around using them for no reason!"
});

const jenny = new ProjectManager({
	"name":"Officer Jenny",
	"age":"30",
	"location":"Pallet Town",
	"gender":"F",
	"specialty":"Law enforcement",
	"favLanguage":"Japanese",
	"catchPhrase":"I left my motorcycle parked at the front desk.",
	"gradClassName":"Web12",
	"favInstructor":"Chiron"
});
console.log(jenny.name);
console.log(wade);