function createCard(post) {
  const div = document.createElement("div");
  div.style.border = "1px solid #ccc";
  div.style.padding = "10px";
  div.style.margin = "10px 0";
  div.style.borderRadius = "5px";
  div.style.backgroundColor = "#f5f5f5";

  div.innerHTML = `
    <strong>Post ID:</strong> ${post.id} <br>
    <strong>User ID:</strong> ${post.userId} <br>
    <strong>Title:</strong> ${post.title} <br>
    <strong>Content:</strong>
    <p>${post.body}</p>
  `;
  return div;
}

async function loadPostsAsync() {
  const count = parseInt(document.getElementById("count").value);
  const container = document.getElementById("posts");
  container.innerHTML = "";

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${count}`);
    const data = await response.json();

    data.forEach(post => {
      container.appendChild(createCard(post));
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
