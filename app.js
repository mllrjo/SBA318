
/*
function updateBackgroundColor(input, color, e) {
  e.preventDefault();
  const value = Number(input)
  input.style.backgroundColor = `rgb(${color === "red" ? value : 0}, ${
  color === "green" ? value : 0
    }, ${color === "blue" ? value : 0})`;
}
*/
/* chatGPT with some revisions */
/* I'd prefer to do it with forms */
/*
function updateBackgroundColor(input, color, e) {
  e.preventDefault();
  input.style.backgroundColor = color;
  console.log(input);
  const value = parseInt(input.value, 10); // Parse the input value as an integer
  console.log(value);
  if (!isNaN(value) && value >= 0 && value <= 255 && input.value.length === 3) {
    input.style.backgroundColor = `rgb(${color === "red" ? value : 0}, ${
      color === "green" ? value : 0
    }, ${color === "blue" ? value : 0})`;
  } else {
    if(input.value.length > 3) input.value = "";
    input.style.backgroundColor = color;
}
*/ 
/* chatGPT with some revisions */
/* I'd prefer to do it with forms */
function updateBackgroundColor(input, color, e) {
  e.preventDefault();
  input.style.backgroundColor = color;
  console.log(input);
  const value = Number(input.value);
  console.log(value);
  if (!isNaN(value) && value >= 0 && value <= 255 && input.value.length === 3) {
    input.style.backgroundColor = `rgb(${color === "red" ? value : 0}, ${
      color === "green" ? value : 0
    }, ${color === "blue" ? value : 0})`;
  } else {
    if(input.value.length > 3) input.value = "";
    input.style.backgroundColor = color;
  }
}
// Add event listeners for input fields
const redInputOneEl = document.querySelector("#myFormRedOne input");
const greenInputOneEl = document.querySelector("#myFormGreenOne input");
const blueInputOneEl = document.querySelector("#myFormBlueOne input");

const redInputTwoEl = document.querySelector("#myFormRedTwo input");
const greenInputTwoEl = document.querySelector("#myFormGreenTwo input");
const blueInputTwoEl = document.querySelector("#myFormBlueTwo input");

redInputOneEl.addEventListener("input", (e) => updateBackgroundColor(redInputOneEl, "red", e));
greenInputOneEl.addEventListener("input", (e) => updateBackgroundColor(greenInputOneEl, "green", e));
blueInputOneEl.addEventListener("input", (e) => updateBackgroundColor(blueInputOneEl, "blue", e));

redInputTwoEl.addEventListener("input", (e) => updateBackgroundColor(redInputTwoEl, "red", e));
greenInputTwoEl.addEventListener("input", (e) => updateBackgroundColor(greenInputTwoEl, "green", e));
blueInputTwoEl.addEventListener("input", (e) => updateBackgroundColor(blueInputTwoEl, "blue", e));


/*
const myFormRedOne = document.getElementById("myFormRedOne");
myFormRedOne.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`You submitted: 
  ${myFormRedOne.querySelector("input").value}`);
});

const myFormGreenOne = document.getElementById("myFormGreenOne");
myFormGreenOne.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`You submitted: 
  ${myFormGreenOne.querySelector("input").value}`);
});

const myFormBlueOne = document.getElementById("myFormBlueOne");
myFormBlueOne.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`You submitted: 
  ${myFormBlueOne.querySelector("input").value}`);
});
*/

const rows = 1;
const cols = 10;

const app = document.getElementById("app");
const table = document.createElement("table");

for (let r = 0; r < rows; r++) {
  const tr = document.createElement("tr");
  for (let c = 0; c < cols; c++) {
    const td = document.createElement("td");
    const but = document.createElement("button");
     //but.textContent = `
    //but:hover {
      //background-color: lightblue;
    //}
 // `;
    but.textContent = [c];
    td.append(but);
    if (r === 1) {
      but.style.borderRadius = "20px";
      but.style.hover;
      but.style.backgroundColor = "red";
    }

    tr.appendChild(td);
  }
  table.appendChild(tr);
}

app.appendChild(table);

// Three digit entry fragment
//function createPost(title, content){
//  const three_digit_input = document.createDocumentFragment();
//  const panel = frag.appendChild(document.createElement("myPanel"));
//  const color_button = document.createElement("color_button");
//  panel.appendChild("color_button");
//  color_button.style.borderRadius = "20px";
//  color_button.style.hover;
//  color_button.style.backgroundColor = "red";
//}

// Use fragments
const frag_app = document.getElementById("instr");

// A builder function to make the created DOM structures consistent.
function createPost(title, content) {
  // Creating a DocumentFragment
  const frag = document.createDocumentFragment();

  const heading = frag.appendChild(document.createElement("h3"));
  heading.textContent = title;
  heading.style.margin = "0px";

  frag.appendChild(document.createElement("hr"));

  const div = frag.appendChild(document.createElement("div"));
  div.style.padding = "0px 15px";
  div.style.marginBottom = "50px";

  div.appendChild(document.createElement("p")).innerHTML = content;

  return frag;
}


(async () => {
  const posts = 
  [{
    "userId": 10,
    "id": 99,
    "title": "Instructions I",
    "body": ""
  },
  {
    "userId": 10,
    "id": 100,
    "title": "Instructions II",
    "body": ""
  }]


  posts.forEach((post) => {
    instr.appendChild(createPost(post.title, post.body));
  });
})();


