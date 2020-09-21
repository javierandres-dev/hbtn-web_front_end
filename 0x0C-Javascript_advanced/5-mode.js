const changeMode = (size, weight, transform, background, color) => {
  return () => {
    document.body.style.fontSize = `${size}px`;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
};
const main = () => {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
  document.querySelector("body").innerHTML = `
        <p>Welcome Holberton!</p>
        <button id="btnSpooky">Spooky</button>
        <button id="btnDarkMode">Dark mode</button>
        <button id="btnScreamMode">Scream mode</button>
      `;
  document.getElementById("btnSpooky").addEventListener("click", spooky);
  document.getElementById("btnDarkMode").addEventListener("click", darkMode);
  document
    .getElementById("btnScreamMode")
    .addEventListener("click", screamMode);
};
main();
