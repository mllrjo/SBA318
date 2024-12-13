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
      // but.style.hover;
      but.style.backgroundColor = "red";
    }

    tr.appendChild(td);
  }
  table.appendChild(tr);
}

app.appendChild(table);


