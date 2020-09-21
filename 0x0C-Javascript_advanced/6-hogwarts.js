const studentHogwarts = () => {
  let privateScore = 0;
  let name = null;
  const changeScoreBy = (points) => (privateScore += points);
  return {
    setName: (newName) => (name = newName),
    rewardStudent: () => changeScoreBy(1),
    penalizeStudent: () => changeScoreBy(-1),
    getScore: () => `${name}: ${privateScore}`,
  };
};
const harry = studentHogwarts();
harry.setName("Harry");
for (let times = 0; times < 4; times++) harry.rewardStudent();
console.log(harry.getScore());
const draco = studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
for (let times = 0; times < 3; times++) draco.penalizeStudent();
console.log(draco.getScore());
