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
        this.previousBackground = sAttributes.previousBackground;
		this.className = sAttributes.className;
		this.favoriteSubjects = sAttributes.favoriteSubjects;
    }
    listsSubjects(){
        
    }
}
class ProjectManager extends Instructor{
    constructor(pmAtts){
        super(pmAtts);
        this.gradClassName=pmAtts.gradClassName;
        this.favInstructor=pmAtts.favInstructor;
    }
}