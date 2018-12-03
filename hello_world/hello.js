console.log('Hello World');

// function
const square = (num) => {
    let r = num * num;
    return r;
};

// function call
let s = square(100);

console.log(s);

// JS Object (JSON)
let studentSwami = {
    fname: 'Swami',
    lname: 'M',
    class: 10,
    address: 'India',
    classTeacher: 'Mary',

    // getName: () => {
    //     return `${this.fname}, ${this.lname}`;
    // },

    getName() {
        return `${this.fname}, ${this.lname}`;
    },

    getAge() {
        return this.class * 1.5;
    }
};

console.log(studentSwami.getName());
console.log(studentSwami.getAge());

let studentResh = {
    fname: 'Resh',
    lname: 'W',
    class: 10,
    address: 'US',
    classTeacher: 'Mary',

    getName() {
        return `${this.fname}, ${this.lname}`;
    },

    getAge() {
        return this.class * 1.5;
    }
};

console.log(studentResh.getName());

console.log('------- CLASSES AND OBJECTS ---------');

// Classes and Objects
class Customer {

    constructor(
        fname,
        lname,
        id,
        mobileNumber,
        emailId,
        address
    ) {
        this.fname = fname;
        this.lname = lname;
        this.id = id;
        this.mobileNumber = mobileNumber;
        this.emailId = emailId;
        this.address = address;
    }

    validateEmailId() {
        if (!this.emailId.contains('@')) {
            return false;
        } else {
            return true;
        }
    }

    getFullName() {
        return `${this.lname}, ${this.fname}`;
    }

    getAddress() {
        return this.address;
    }
};

let c1 = new Customer('Swami', 'M', 1, '+91 7299630888', 'swaaminathanm@gmail.com', 'India');
console.log(c1.getAddress());
console.log(c1.getFullName());

let c2 = new Customer('Resh', 'W', 2, '00000000', 'xyz@gmail.com', 'USA');
console.log(c2.getAddress());
console.log(c2.getFullName());

// Inheritance

console.log('---------------- INHERITANCE ----------------');

// Base class
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    describe() {
        console.log(`Hello ${this.name}. Your age is ${this.age}`);
        // console.log('Hello ' + this.name +'. Your age is ' + this.age);
    }
}

class Employee extends Person {
    constructor(id, name, age, bankAccountNumber, salary) {
        super(id, name, age);

        this.bankAccountNumber = bankAccountNumber;
        this.salary = salary;
    }

    describe() {
        super.describe();
        console.log(`Your salary is ${this.salary} and bank account is ${this.bankAccountNumber}`);
    }
}

const swamiEmp = new Employee(1, 'Swami', 40, 1234, 50000);
swamiEmp.describe();

const greet = (name) => {
    if (name === undefined) {
        console.log('Error');
    }
    console.log(name);
}

greet('Swami');
greet();