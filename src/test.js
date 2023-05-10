let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const MODULES_BECAME_STANDARD_YEAR = 2015;

class User {
  constructor(name) {
    this.name = name;
  }
}

const testUser = {
    name : 'Mane'
}

const someFunc = function(){
    console.log(2);
}

export default someFunc;
export {months, User, MODULES_BECAME_STANDARD_YEAR, testUser};