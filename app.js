class School{
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }

    static pickSubstituteTeacher(substituteTeachers){
        let randomIndex = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomIndex];
    }

    quickFacts(){
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }

    set setnumberOfStudents(newNumberOfStudents){
        if(typeof newNumberOfStudents === 'number'){
            this._numberOfStudents = newNumberOfStudents;
        }
        else{
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
}

class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
        return this._pickupPolicy;
    }
}

class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams){
        super(name,'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams(){
        this._sportsTeams.forEach(x => 
            {console.log(x)});
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.sportsTeams;