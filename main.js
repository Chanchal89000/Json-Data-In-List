let button = document.getElementById("btn");
let deleteBtn = document.getElementById("btn2");
let ul = document.getElementById("lgi");

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await response.json();
  usersData.forEach((item) => {
    let li2 = document.getElementById("li2");
    let li3 = document.getElementById("li3");

    let newLi = document.createElement("li");
    newLi.style.color = "white";
    newLi.style.display = "block";
    newLi.style.margin = "2px";
    newLi.innerText = item.name;
    li1.appendChild(newLi);

    let newLi2 = document.createElement("li");
    newLi2.style.color = "white";
    newLi2.style.display = "block";
    newLi2.style.margin = "2px";
    newLi2.innerText = item.email;
    li2.appendChild(newLi2);

    let newLi3 = document.createElement("li");
    newLi3.style.color = "white";
    newLi3.style.display = "block";
    newLi3.style.margin = "2px";
    newLi3.innerText = item.username;
    li3.appendChild(newLi3);
  });
};

const deleteUser = () => {
  // ul.remove();
  if (window.confirm("Are You SUre")) {
    ul.remove();
    location.reload();
  }
};

button.addEventListener("click", fetchUsers);
deleteBtn.addEventListener("click", deleteUser);
