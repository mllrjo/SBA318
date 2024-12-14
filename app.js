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
const frag_app = document.getElementById("app");

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
    "title": "temporibus sit alias delectus eligendi possimus magni",
    "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
  },
  {
    "userId": 10,
    "id": 100,
    "title": "at nam consequatur ea labore ea harum",
    "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
  }]


  posts.forEach((post) => {
    app.appendChild(createPost(post.title, post.body));
  });
})();


