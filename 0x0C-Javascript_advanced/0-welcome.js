const welcome = (firstName, lastName) => {
  let fullName = `${firstName} ${lastName}`;
  function displayFullName(name) {
    alert(`Welcome ${name}!`);
  }
  displayFullName(fullName);
};
