let productArray=[];
let webProductlist=document.querySelectorAll(".as-imagegrid-item-title");
webProductlist.forEach((e) =>
{
    productArray.push(e.innerText.replace("\nSupport",""));
});

console.log(productArray);