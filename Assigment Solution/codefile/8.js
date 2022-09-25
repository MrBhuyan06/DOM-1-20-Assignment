let lang=document.querySelectorAll("#SIvCob a");
for(let i in lang)
{
    if(i%2==0)
    {
       lang[i].remove(); 
    }
}