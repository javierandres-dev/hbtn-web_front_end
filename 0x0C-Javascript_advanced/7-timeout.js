console.log("Start of the execution queue");
setTimeout(() => {
  console.log("Final code block to be executed");
}, 0);
for (let number = 1; number <= 100; number++) console.log(number);
console.log("End of the loop printing");
