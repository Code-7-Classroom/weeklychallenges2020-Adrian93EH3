////////EASY//////////

function exercise(activity){
    return Today's activity: ${activity};
}

function run(){
    var run = exercise('running');
    return run;
}

function swim(){
    var swim = exercise('swimming');
    return swim;
}
console.log(run());
console.log(swim())

////////////MEDIUM/////////////

function pizzaSlices(slices){
    return slices;
}

function sharePizza(people){
    var sharePizza = pizzaSlices(8);
    var eachPerson = (sharePizza / people).toFixed(2);
    return Each person gets ${eachPerson} slices of pizza;
}

console.log(sharePizza(2));
console.log(sharePizza(3));

////////////HARD///////////////

function clientInfo() {
    var pii = {
        name: 'Jose Claudio Padín',
        ssn: '744-58-6924'
    }
    function displayName() {
        console.log(pii.name);
    }
    return displayName;
}

var clientData = clientInfo();
clientData();

//////////VERY HARD///////////

var Person = function (name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.profession = function(){
    console.log(this.name + ' is a ' + this.job);
    }
    this.exercise = function() {
    console.log(this.name + ' running is fun! - said no one ever');
    }
    this.completeTask = function() {
    console.log(this.name + ' is busy ');
    }
    this.acceptTask = function() {
    console.log(this.name + ' is not busy');
    }
}

var Programmer = function(language, busy){
    Person.call(name, job, age);
    this.language = 'javascript';
    this.busy = true;
    this.completeTask = function() {
        console.log(this.name + ' is busy.');
    }
    this.acceptTask = function () {
        console.log(this.name + ' is not busy.');
    }
    this.acceptTask = function(){
    }
};

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.consotructor = Programmer;

var john = new Person('John', ' is a front-end developer.', 26);
var mary = new Person('Mary', ' is a back-end developer.', 21);

john.exercise();
mary.exercise();
john.profession();
mary.profession();
john.completeTask();