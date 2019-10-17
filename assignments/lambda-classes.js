// CODE here for your Lambda Classes
class Person {
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        let newGrade = student.grade;

        if(student.grade < 94){
            newGrade = student.grade + + Math.floor(Math.random() * 9);
            student.grade = newGrade;
        }
        
        return `After further review your grade has been changed. \n ${student.name} received a ${newGrade}% on ${subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(obj){
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel} @channel standy times`;
    }
    
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

class Student extends Person{
    constructor(obj){
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
        this.grade = obj.grade;
    }

    listsSubjects() {
        return this.favSubjects.forEach(subject => console.log(subject));
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

    graduate(instructor, subject){
        if(this.grade > 70){
            return `Congrats!  You've graduated and are ready to move on!`;
        }else{
            return instructor.grade(this, subject);
        }
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const arnold = new ProjectManager({
    name: 'Arnold',
    location: 'Austria',
    age: 72,
    favLanguage: 'Python',
    specialty: 'Making you look weak',
    catchPhrase: 'I\'ll be back',
    gradClassName: 'CS1',
    favInstructor: 'Jay'
})

const jonah = new Student({
    name: 'Jonah',
    location: 'Illinois',
    age: 39,
    previousBackground: 'CFML dev',
    className: 'WEB25',
    favSubjects: ['HTML', 'CSS', 'JavaScript', 'Python'],
    grade: 44
})

console.log(jonah)

let randomSubject = Math.floor(Math.random() * jonah.favSubjects.length);

console.log(jonah.speak())
jonah.listsSubjects();
console.log('\n');
console.log(jonah.PRAssignment(jonah.favSubjects[randomSubject]))
console.log(jonah.sprintChallenge(jonah.favSubjects[randomSubject]));

console.log('\n');

console.log(arnold)
console.log(arnold.standUp('WEB25'))
console.log(arnold.debugsCode(jonah, 'WEB25'))

console.log('\n\n');

console.log(fred)
console.log(fred.demo('CSS'))
console.log(fred.grade(jonah, jonah.favSubjects[randomSubject]));

console.log('\n');
console.log(jonah.graduate(fred, jonah.favSubjects[randomSubject]))
console.log(jonah.graduate(fred, jonah.favSubjects[randomSubject]))
console.log(jonah.graduate(fred, jonah.favSubjects[randomSubject]))
console.log(jonah.graduate(fred, jonah.favSubjects[randomSubject]))
console.log(jonah.graduate(fred, jonah.favSubjects[randomSubject]))
console.log(jonah.graduate(fred, jonah.favSubjects[randomSubject]))
