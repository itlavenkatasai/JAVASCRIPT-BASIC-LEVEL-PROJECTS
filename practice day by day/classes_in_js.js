class car {
    constructor(name, year) {
        this.name = name;
        this.age = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear - this.year;
    }
}
const mycar = new car(ertiga, 2019);
console.log('my car age is' + mycar.age() + 'years old');
 