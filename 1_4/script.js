const div = document.createElement("div");
div.style.width = "400px";
div.style.height = "240px";
div.style.border = "3px solid black";
div.style.padding = "30px";

const span = document.createElement("span");
span.style.fontSize = "30px";
span.style.color = "red";
span.style.fontWeight = "bold";
span.innerText = "My Tasks";

const ol = document.createElement("ol");
ol.type = "I";
const li1 = document.createElement("li");
li1.innerHTML = "user dashboard";
const li2 = document.createElement("li");
li2.innerHTML = "admin dashboard";
const li3 = document.createElement("li");
li3.innerHTML = "authentication";
const li4 = document.createElement("li");
li4.innerHTML = "about page";
const li5 = document.createElement("li");
li5.style.textDecoration = "line-through";
li5.innerHTML = "content page";
const ul = document.createElement("ul");
const ulLi1 = document.createElement("li");
ulLi1.innerHTML = "login";
const ulLi2 = document.createElement("li");
ulLi2.style.textDecoration='line-through'
ulLi2.innerHTML = "register";
const ulLi3 = document.createElement("li");
ulLi3.innerHTML = "log out";

const input = document.createElement("input");
input.style.width = "50%";

const btn = document.createElement("button");
btn.innerText = "add task";
btn.style.marginLeft = "10px";

ul.appendChild(ulLi1);
ul.appendChild(ulLi2);
ul.appendChild(ulLi3);

li3.appendChild(ul);

ol.appendChild(li1);
ol.appendChild(li2);
ol.appendChild(li3);
ol.appendChild(li4);
ol.appendChild(li5);

div.appendChild(span);
div.appendChild(ol);
div.appendChild(input);
div.appendChild(btn);
document.body.appendChild(div);
