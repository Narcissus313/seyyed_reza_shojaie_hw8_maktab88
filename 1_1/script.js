let mainDiv = document.createElement("div");

mainDiv.style.width = "400px";
mainDiv.style.height = "400px";
mainDiv.style.margin = "100px auto";
mainDiv.style.backgroundColor = "green";
mainDiv.style.lineHeight = "2";
mainDiv.style.color = "white";
mainDiv.style.fontSize = "20px";
mainDiv.style.overflowY = "auto";
mainDiv.style.padding = "10px";

let firstText = "Click here and watch the next change!";
mainDiv.innerText = firstText;

document.body.appendChild(mainDiv);

mainDiv.onclick = function () {
	mainDiv.innerText += " " + firstText;
};
