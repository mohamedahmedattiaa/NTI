const menuItems = [
  { text: "Memo",       href: null },
  { text: "Articles",   href: "#" },
  { text: "Photos",     href: "#" },
  { text: "About",      href: "#" },
  { text: "Clients",    href: "#" },
  { text: "Contact",    href: "#" },
];

const ul = document.createElement("ul");

menuItems.forEach((item) => {
  const li = document.createElement("li");

  if (item.href) {
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
  } else {
    li.innerHTML = `<b>${item.text}</b>`;
  }

  ul.appendChild(li);
});

document.getElementById("menuContainer").appendChild(ul);
