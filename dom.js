var card=document.createElement("div")
card.classList.add("card");


var heading=document.createElement("h1");
heading.innerHTML="Computer";
heading.classList.add("id1");

var div=document.createElement("div");
div.classList.add("fordiv");


var image=document.createElement("img");
image.setAttribute("src","images/image2.avif");
image.classList.add("idimg");
div.appendChild(image);

var para=document.createElement("p");
para.innerHTML="A computer is an electronic machine that processes raw data to give information as output. An electronic device that accepts data as input, and transforms it under the influence of a set of special instructions called Programs, to produce the desired output (referred to as Information)."
para.classList.add("id2");



var section=document.getElementById("one");
section.appendChild(card);
card.appendChild(heading);
card.appendChild(div);
card.appendChild(para);