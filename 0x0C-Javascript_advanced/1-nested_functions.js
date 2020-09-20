let globalVariable = "Welcome";
const outer = (say) => {
  alert(say);
  let course = "Holberton";
  const inner = (say, name) => {
    alert(`${say} ${name}`);
    let exclamation = "!";
    const inception = (say, name, sign) => alert(`${say} ${name}${sign}`);
    inception(globalVariable, course, exclamation);
  };
  inner(globalVariable, course);
};
outer(globalVariable);
