let btnParentCopy = document.querySelector(".parent-copy");
let btnChildCopy = document.querySelector(".child-copy");
let targetText = document.querySelector(".target").firstChild.data;
let childText = document.querySelector(".child").firstChild.data;
btnParentCopy.onclick = function () {
	document.querySelector(".target").firstChild.data =
		document.querySelector(".parent").textContent + targetText;
};
btnChildCopy.onclick = function () {
	document.querySelector(".target").firstChild.data =
		document.querySelector(".child").textContent + targetText;
};
