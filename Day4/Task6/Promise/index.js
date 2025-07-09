function createCard(post) {
  const div = document.createElement("div");
  div.style.border = "1px solid #ccc";
  div.style.padding = "10px";
  div.style.margin = "10px 0";
  div.style.borderRadius = "5px";
  div.style.backgroundColor = "#f9f9f9";

  div.innerHTML = `
    <strong>Post ID:</strong> ${post.id} <br>
    <strong>User ID:</strong> ${post.userId} <br>
    <strong>Title:</strong> ${post.title} <br>
    <strong>Content:</strong>
    <p>${post.body}</p>
  `;
  return div;
}

function loadPostsThen() {
  const count = parseInt(document.getElementById("count").value);
  const container = document.getElementById("posts");
  container.innerHTML = "";

  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${count}`)
    .then(response => response.text()) 
    .then(raw => {
      const data = JSON.parse(raw); 
      const selected = data.slice(0, count);
      selected.forEach(post => {
        container.appendChild(createCard(post));
      });
    })
    .catch(error => {
      console.error("Error fetching posts:", error);
    });
}
