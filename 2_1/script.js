let mainDiv = document.createElement("div");

mainDiv.style.width = "400px";
mainDiv.style.height = "400px";
mainDiv.style.margin = "100px auto";
mainDiv.style.backgroundColor = "red";
mainDiv.style.color = "white";
mainDiv.style.fontSize = "20px";
mainDiv.style.padding = "10px";

mainDiv.innerText = "Hover on me!";


mainDiv.onmouseenter=function(){
    mainDiv.style.backgroundColor = "blue";
}
mainDiv.onmouseout=function(){
    mainDiv.style.backgroundColor = 'red';
}
document.body.appendChild(mainDiv);

