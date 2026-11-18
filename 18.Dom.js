// const h1 = document.getElementsByTagName("h1")[0]
// const h1 = document.getElementsByClassName("h1-tag")[0]
// const h1 = document.getElementById("jsOneShot")

// const h1 = document.querySelector("h1")
// const h1 = document.querySelectorAll("h1")

// const h1 = document.querySelector(".h1-tag")
const h1 = document.querySelector("#jsOneShot");

// let content = h1.innerHTML;
// let content2 = h1.textContent;

// console.log(content);
// console.log(content2);

h1.textContent = "<i>Nishant Saini</i>";
h1.innerHTML = "<i>Nishant Saini</i>";

h1.setAttribute("style", "background-color: red;");

// console.log(h1.getAttribute("style"));

h1.removeAttribute("style");

// h1.classList.add("bg-blue" , "text-yellow")
// h1.classList.remove("text-yellow");
// h1.classList.toggle("text-yellow")

// h1.className = "bg-blue text-yellow"

const div = document.createElement("div");
const i = document.createElement("i");
// div.textContent = "Div element"
i.textContent = "Kya Crazy padhate ho bhai";
div.innerHTML = "<mark>Div Element</mark>";

const body = document.querySelector("body");

// body.appendChild(div, i)
// body.append(div, i)

body.prepend(div, i);

// body.removeChild(i)

// i.remove()

function getElementById(id) {
  return document.getElementById(id);
}

getElementById("btn").addEventListener("click", (e) => {
      e.stopPropagation();

  // console.log("callback function triggered...");
  // h1.className = "bg-blue text-yellow"
  h1.classList.toggle("bg-blue");
  h1.classList.toggle("text-yellow");
  getElementById("btn").textContent = "button clicked";
});

function outterDiv(e) {
  e.stopPropagation();

  // console.log(e.target);
  // console.log(e.currentTarget);

  //   console.log(e.target);
  console.log("outter div clicked");
}

getElementById("outter-div").addEventListener("click", outterDiv); // {once : true}

// getElementById("outter-div").removeEventListener("click", outterDiv);

getElementById("inner-div").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("inner div clicked");
});

body.addEventListener("click", (e) => {
  e.stopPropagation();

  console.log("body clicked");
});
