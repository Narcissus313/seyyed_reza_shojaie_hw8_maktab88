let mainDiv = document.createElement("div");
mainDiv.classList.add("main");
mainDiv.style.width = "800px";
mainDiv.style.margin = "30px auto";
document.body.appendChild(mainDiv);

let table = document.createElement("table");
table.style.border = "1px solid black";
table.style.margin = "auto";
mainDiv.prepend(table);

let row = document.createElement("tr");
row.style.backgroundColor = "black";
row.style.color = "white";
table.prepend(row);

function thMaker(text) {
	let th = document.createElement("th");
	th.style.padding = "4px 10px";
	th.innerText = text;
	return th;
}

row.appendChild(thMaker("Row"));
row.appendChild(thMaker("Uid"));
row.appendChild(thMaker("First Name"));
row.appendChild(thMaker("Last Name"));
row.appendChild(thMaker("City"));
row.appendChild(thMaker("Postal Code"));
row.appendChild(thMaker("Phone Numer"));
row.appendChild(thMaker("Position"));

function userRowMaker(user) {
	let tr = document.createElement("tr");
	if (userData.indexOf(user) % 2 !== 0)
		tr.style.backgroundColor = "rgb(228, 219, 219)";
	let td = document.createElement("td");
	td.style.padding = "4px 6px";
	td.style.textAlign = "center";
	td.style.borderBottom = "1px solid black";
	td.innerText = userData.indexOf(user) + 1;
	tr.prepend(td);
	for (const key of Object.keys(user)) {
		let td = document.createElement("td");
		td.style.textAlign = "center";
		td.style.padding = "4px 16px";
		td.style.borderBottom = "1px solid black";
		td.innerText = user[key];
		tr.appendChild(td);
	}
	return tr;
}
for (const user of userData) {
	table.appendChild(userRowMaker(user));
}
