let newUserData = userData.slice();
let params = Object.keys(newUserData[0]);

let mainDiv = document.createElement("div");
mainDiv.style.width = "800px";
mainDiv.style.margin = "30px auto";
document.body.appendChild(mainDiv);

let titleRow = document.createElement("tr");
titleRow.appendChild(thMaker("Row"));

let table = document.createElement("table");
mainDiv.appendChild(table);

for (const key of Object.keys(newUserData[0])) {
	titleRow.appendChild(thMaker(key));
}
function thMaker(text) {
	let th = document.createElement("th");
	th.style.padding = "4px 10px";
	th.style.border = "1px solid black";
	th.innerText = text;
	return th;
}
function tdMaker(text) {
	let td = document.createElement("td");
	td.style.textAlign = "center";
	td.style.padding = "4px 16px";
	td.style.border = "1px solid black";
	td.style.height = "38px";
	td.innerText = text;
	return td;
}
function userRowMaker(user) {
	let tr = document.createElement("tr");
	if (newUserData.indexOf(user) % 2 !== 0)
		tr.style.backgroundColor = "rgb(228, 219, 219)";
	let td = tdMaker(newUserData.indexOf(user) + 1);
	tr.appendChild(td);
	for (const key of Object.keys(user)) {
		let td = tdMaker(user[key]);
		tr.appendChild(td);
	}
	return tr;
}
function tableSort(data, sortBy = "uid") {
	switch (typeof newUserData[0][sortBy]) {
		case "number":
			data.sort((a, b) => a[sortBy] - b[sortBy]);
			break;
		case "string":
			data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
			break;
	}
}
function tableMaker() {
	titleRow.style.backgroundColor = "black";
	titleRow.style.color = "white";
	table.style.border = "1px solid black";
	table.style.borderCollapse = 'collapse';
	table.style.margin = "auto";
	table.appendChild(titleRow);
}
tableMaker();
for (const user of newUserData) {
	table.appendChild(userRowMaker(user));
}
for (let i = 0; i < params.length; i++) {
	titleRow.children[i + 1].addEventListener("click", function () {
		tableSort(newUserData, this.firstChild.data);
		table.innerHTML = "";
		tableMaker();
		for (const user of newUserData) {
			table.appendChild(userRowMaker(user));
		}
		return;
	});
}
