let params = Object.keys(userData[0]);
let mainDiv = document.createElement("div");
let table = document.createElement("table");
let tHead = document.createElement("thead");
let tBody = document.createElement("tbody");
let titleRow = document.createElement("tr");
let modal = document.querySelector("#myModal");
let modalTable = document.querySelector("#modalContent table tbody");
let btnDel = document.querySelector(".cleaner");
let btnAdd = document.querySelector(".btnAdd");
let btnSave = document.querySelector(".btnSave");
let lastSortBy = "uid";
let sortDir = "down";
let lastData;
let datas;
let modalBody;

document.body.appendChild(mainDiv);
mainDiv.appendChild(table);
table.appendChild(tHead);
table.appendChild(tBody);
tHead.appendChild(titleRow);

titleRow.style.backgroundColor = "black";
titleRow.style.color = "white";
mainDiv.style.width = "900px";
mainDiv.style.margin = "60px auto";
table.className = "w3-table-all w3-hoverable";

function thMaker(text) {
	let th = document.createElement("th");
	th.style.padding = "12px 10px";
	th.style.textAlign = "center";
	th.style.cursor = "pointer";
	th.innerText = text;
	return th;
}
function tdMaker(text) {
	let td = document.createElement("td");
	td.style.padding = "10px 2px";
	td.style.textAlign = "center";
	td.style.lineHeight = "1.5rem";
	td.innerText = text;
	td.spellcheck = false;
	return td;
}
function userRowMaker(user) {
	let tr = document.createElement("tr");
	let td = tdMaker(userData.indexOf(user) + 1);
	tr.appendChild(td);
	for (const key of Object.keys(user)) {
		let td = tdMaker(user[key]);
		tr.appendChild(td);
	}
	return tr;
}
function tableSort(data, sortBy = "uid") {
	if (sortDir) {
		if (typeof userData[0][sortBy] === "number") {
			data.sort((a, b) => a[sortBy] - b[sortBy]);
			return;
		}
		data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
	} else {
		if (typeof userData[0][sortBy] === "number") {
			data.sort((a, b) => b[sortBy] - a[sortBy]);
			return;
		}
		data.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
	}
}

function titleRowMaker() {
	titleRow.appendChild(thMaker("Row"));
	for (const key of params) {
		titleRow.appendChild(thMaker(key));
	}
}
function refreshTable() {
	tBody.innerHTML = "";
	for (const user of userData) {
		tBody.appendChild(userRowMaker(user));
	}
}
titleRowMaker();
refreshTable();
for (let i = 0; i < params.length; i++) {
	titleRow.children[i + 1].addEventListener("click", function () {
		tableSort(userData, this.firstChild.data);
		lastSortBy = this.firstChild.data;
		sortDir = !sortDir;
		tBody.innerHTML = "";
		refreshTable();
		return;
	});
}

function createUser(newUser) {
	//validation part
	if (typeof newUser !== "object") {
		console.log("not a valid input");
		return;
	}

	for (const object of userData) {
		//checks if the user with this uid exists
		if (object.uid === newUser.uid) {
			alert("this user exsists and can not be created again");
			return;
		}
	}
	if (isNaN(newUser.uid)) {
		alert("not valid user id");
		return;
	}
	userData.push(newUser);
}

tBody.addEventListener("click", function (e) {
	btnSave.style.display = "none";
	btnDel.style.display = "block";
	modal.style.display = "block";

	lastData = e.path[1].innerHTML;
	console.log(e);
	datas = modal.querySelector("tbody tr");
	modalTable.innerHTML = lastData;
	for (let i = 0; i < params.length + 1; i++) {
		modalBody = modal.children[0].querySelector("table tbody tr");
		let modalPanel = modal.querySelector("table thead tr");
		modalPanel.style.cursor = "default";
		modalPanel.style.backgroundColor = "black";
		modalPanel.style.color = "white";

		if (i === 0 || i === 1) {
			modalBody.children[i].contentEditable = "false";
			modalBody.children[i].style.backgroundColor = "#cacaca";
			modalBody.children[i].style.color = "white";
			modalBody.children[i].style.cursor = "default";
		} else {
			modalBody.children[i].contentEditable = "true";
			modalBody.children[i].style.border = "1px solid #ccc";
			modalBody.children[i].style.cursor = "pointer";
		}
	}
});

window.addEventListener("keydown", function (e) {
	if (e.target.tagName === "TD") {
		if (e.keyCode === 13 && btnSave.style.display !== "block") {
			let datas = e.path[1].innerText.split("	").slice(1);
			if (isNaN(datas[4]) || isNaN(datas[5])) {
				alert("postal code or phone number is not a valid number");
				modal.style.display = "none";
				return;
			}
			let id = datas[0];
			userData.map((user) => {
				if (String(user.uid) === String(id)) {
					for (let index = 1; index < params.length; index++) {
						user[params[index]] = datas[index];
					}
					return;
				}
				tableSort(userData, lastSortBy);
				refreshTable();
				modal.style.display = "none";
			});
		}
	}
});
window.onclick = function (event) {
	if (event.target === modal) {
		modal.style.display = "none";
		tableSort(userData, lastSortBy);
		refreshTable();
	}
};

btnDel.addEventListener("click", function (e) {
	if (confirm("Are you sure you want to delete this data from database?")) {
		let id = e.path[1]
			.querySelector("tbody tr")
			.innerText.split("	")
			.slice(1)[0];
		userData.map((user) => {
			if (String(user.uid) === String(id)) {
				userData.splice(userData.indexOf(user), 1);
				return;
			}
			tableSort(userData, lastSortBy);
			refreshTable();
			modal.style.display = "none";
		});
	}
});

btnAdd.addEventListener("click", function (e) {
	btnDel.style.display = "none";
	btnSave.style.display = "block";
	modal.style.display = "block";

	modalTable.innerHTML = "";
	modalBody = "";
	let newTr = document.createElement("tr");
	for (let i = 0; i < params.length + 1; i++) {
		let td = document.createElement("td");
		td.innerText = " ";
		newTr.appendChild(td);
	}
	modalTable.appendChild(newTr);
	let modalPanel = modal.querySelector("table thead tr");
	modalPanel.style.cursor = "default";
	modalPanel.style.backgroundColor = "black";
	modalPanel.style.color = "white";
	// modalPanel.removeChild(modalPanel.firstChild);
	modalBody = modalTable.querySelector("tbody tr");
	for (let i = 1; i < params.length + 1; i++) {
		modalBody.children[i].contentEditable = "true";
		modalBody.children[i].style.border = "1px solid #ccc";
		modalBody.children[i].style.cursor = "pointer";
	}
});

btnSave.addEventListener("click", function (e) {
	let newUser = {};
	let data = modalBody.innerText.split("	");
	for (let i = 0; i < params.length; i++) {
		if (i === 0) {
			data.shift();
			newUser[params[i]] = Number(data[i]);
			continue;
		}
		newUser[params[i]] = data[i];
	}
	if (isNaN(data[4]) || isNaN(data[5])) {
		alert("postal code or phone number is not a valid number");
		modal.style.display = "none";
		return;
	}
	modal.style.display = "none";
	createUser(newUser);
	tableSort(userData, lastSortBy);
	refreshTable();
});
