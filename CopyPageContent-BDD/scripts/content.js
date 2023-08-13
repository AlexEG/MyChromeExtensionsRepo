const button = document.createElement("button");
button.textContent = `Copy HTML`;

console.log(window.location.origin === "http://localhost:5173");

const url = window.location.href;
const site1 = "http://localhost:5173/golang/w3-school/go-create-slice";
const site2 = "http://localhost:5173/golang/w3-school/go-arrays";
const btnBG = url === site1 ? "green" : "black";

button.style = `
  color: white;
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
  background-color: ${btnBG};
  padding-block: 0.3rem;
  padding-inline: 1rem;
  border-radius: 5px;
`;

button.setAttribute("id", "copy-page-content-btn");

document
  .querySelector("main article")
  .insertAdjacentElement("afterend", button);

document
  .querySelector("button#copy-page-content-btn")
  .addEventListener("click", logHTML);

function logHTML() {
  const HTML = document.querySelector("body > div#root main article").innerHTML;

  navigator.clipboard.writeText(HTML);
  console.log(HTML);
}
