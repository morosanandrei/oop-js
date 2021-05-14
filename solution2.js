function userCreator(name, score) {
  const newUser = Object.create(userFunctionScore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionScore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("You're loggedin");
  },
};

const user1 = userCreator("Phil", 4);
user1.increment();

console.log(user1.score);
