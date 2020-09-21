const createElement = (data) => {
  const p = document.createElement("p");
  const content = document.createTextNode(`${data}`);
  p.appendChild(content);
  document.querySelector("body").appendChild(p);
};
const queryWikipedia = (callback) => {
  const urlApi =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", urlApi, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.response);
      const article = data.query.pages[21721040].extract;
      callback(article);
    }
  };
  xhr.send();
};
queryWikipedia(createElement);
