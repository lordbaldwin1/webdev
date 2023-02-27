// Add your code here
/*
var img = document.createElement("img");
img.src = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";
var src = document.getElementById("header");
src.appendChild(img);
*/


let img = document.createElement("img");
img.src = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";
img.style.width = '200px';
img.style.height = '200px';
img.style.borderRadius = '50%';
img.style.display = 'block';
img.style.margin = "0 auto";
document.body.append(img);

let bio = document.createElement("center");
bio.textContent = "Hello! My name is Zach and this is my introduction.";
bio.style.textAlign = 'center';
bio.style.fontSize = '20pt';
document.body.appendChild(bio);

let bio2 = document.createElement("center");
bio2.textContent = "I don't work right now and I have my drivers license. I enjoy playing video games and hanging out with my friends";
bio2.style.textAlign = 'center';
document.body.appendChild(bio2);
