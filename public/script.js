const checkbox = document.getElementById("checkbox");
const btn = document.getElementById("btn");
const chLabel = document.getElementById("chLabel");
const msgId = document.querySelector("#msg");
const ballId = document.querySelector("#ball");
const container = document.querySelector("#container");
const fContainer = document.getElementById("form-container");
const form = document.getElementById("form");
const box = document.querySelector("#box");
const fInput = document.querySelectorAll(".input");
const button = document.querySelector(".button");
const name1 = document.getElementById("name");
const age = document.getElementById("age");
const address = document.getElementById("address");
const email = document.getElementById("e-mail");
const contact = document.getElementById("contact");
const inp = document.querySelectorAll("#inp");
const cracker = document.getElementById("cracker");

function execute() {
  cracker.style.display = "none";
  container.classList.toggle("container");
  btn.classList.toggle("btn");
  box.classList.toggle("box");
  fContainer.classList.toggle("form-container");
  form.classList.toggle("form");
  msgId.classList.toggle("msg");
  ballId.classList.toggle("ball");
  checkbox.classList.toggle("checkbox");
  chLabel.classList.toggle("label");
}

checkbox.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    msgId.style.color = "#bfdbfe";
    msgId.innerHTML = "Dark";
    msgId.style.marginLeft = "0";
    ballId.style.backgroundColor = "#bfdbfe";
    container.style.backgroundColor = "#475569";
    box.style.boxShadow =
      "rgba(0, 0, 0, 0.523) 0px 10px 10px -10px,rgba(0, 0, 0, 0.733) 0px 30px 20px -30px,rgba(0, 0, 0, 0.475) 0px -2px 6px 0px inset";

    for (let i = 0; i < fInput.length; i++) {
      fInput[i].style.boxShadow =
        "rgba(71, 162, 242, 0.754) 2px 2px 3px 0px inset,rgba(0, 0, 0, 0.5) -2px -2px 3px 1px inset";
      fInput[i].style.color = "rgb(93, 161, 250)";
    }
    button.style.boxShadow =
      "rgba(0, 0, 0, 0.734) 0px 2px 5px -1px,rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";

    button.style.color = "rgb(93, 161, 250)";
    name1.style.color = "#ffbc98";
    age.style.color = "#76f9ee";
    address.style.color = "#ec75fc";
    email.style.color = "#fb61a6";
    contact.style.color = "#31c8ee";
    for (let i = 0; i < inp.length; i++) {
      inp[i].classList.toggle("inputp");
    }
  } else {
    msgId.style.color = "black";
    msgId.innerHTML = "Light";
    msgId.style.marginLeft = "17px";
    ballId.style.backgroundColor = "black";
    container.style.backgroundColor = "#bfdbfe";
    box.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";

    for (let i = 0; i < fInput.length; i++) {
      fInput[i].style.boxShadow =
        "rgba(52, 144, 224, 0.552) 2px 2px 3px 0px inset,rgba(103, 103, 103, 0.5) -2px -2px 3px 1px inset";
      fInput[i].style.color = "black";
    }
    button.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";

    button.style.color = "black";
    name1.style.color = "#ea580c";
    age.style.color = "#0d9488";
    address.style.color = "#c026d3";
    email.style.color = "#db2777";
    contact.style.color = "#0891b2";
    for (let i = 0; i < inp.length; i++) {
      inp[i].classList.toggle("inputp");
    }
  }
});
