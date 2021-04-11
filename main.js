let quotsurl = 'https://type.fit/api/quotes';
let names = document.getElementById("name");
let pa = document.querySelector("p")
let but = document.querySelector("button");
function getnewqouts(){
    let rnum = Math.floor(Math.random() * 10);
    pa.innerHTML = `${data[rnum].text}`;
    names.innerHTML = `${data[rnum].author}`;
}
let data  = "";
async function promise(){
    let getfew = await fetch(quotsurl);
     data = await getfew.json();
    getnewqouts();
    }
    but.addEventListener("click",getnewqouts);

