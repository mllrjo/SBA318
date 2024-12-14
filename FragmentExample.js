import "./styles.css";

const app = document.getElementById("app");

// A builder function to make the
// created DOM structures consistent.
function createPost(title, content) {
  // Creating a DocumentFragment
  const frag = document.createDocumentFragment();

  // Anything we do to the fragment here is not
  // processed in the live view of the document.
  // This allows for processing-heavy DOM changes
  // to occur without interrupting user experience.
  // These, however, are rather simple operations.
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

// Now, we can use the function to build consistent
// post elements using custom data. We'll be pulling
// from the JSON Placeholder API for convenience.
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
