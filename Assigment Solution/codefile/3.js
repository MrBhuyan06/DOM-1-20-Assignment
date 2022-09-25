//adding the text my new fag
let getlist=document.querySelector(".accordion-homepage");
let section=document.createElement("section");
section.className("parent");
let h3=document.createElement("h3");
h3.textContent("myNewFAQ");
section.appendChild(h3);
getlist.appendChild(section)