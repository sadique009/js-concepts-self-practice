class Students {
  constructor(name, age, classs) {
    this.Name = name;
    this.Age = age;
    this.Class = classs;
  }
  // below is the instance method.
  // static biodata() ...using static will prevent this method to be inherited by child class.
  biodata() {
    return `welcome to classes ${this.Name}!. You are ${this.Age} years old!. You are in class ${this.Class}!.`;
  }
}

// child class.
class Players extends Students {
  constructor(name, age, classs, game) {
    super(name, age, classs); // in order to access the properties of constructor of parent class,
    // we use super() method.
    this.Game = game;
  }
  player_biodata() {
    return `${super.biodata()} You play the game of ${this.Game}!`;
  }
}

let obj1 = new Players("vinod", 24, "12th", "football");
// let obj2 = new Students("anmol", 25, "11th");
console.log(obj1.player_biodata());
// obj2.biodata();
console.log(obj1);
