let source = document.getElementById('img-sr');
let a = document.getElementById('a');
let img_div = document.getElementById('img');
let name = document.getElementById('name');
let button = document.getElementById('btn');
async function btn(){
    button.setAttribute("disabled",true);
    button.innerHTML = "Loading...";
    let url = " https://api.catboys.com/img";
    let response = await fetch(url);
    let obj = await response.json();
    img_div.style.display = "block";
    let artist = obj.artist;
    let image = obj.url; 
    source.src = image;
    a.href = image
    name.innerHTML = "Artist: "+artist;
    button.innerHTML = "Generate";
    button.removeAttribute("disabled");
}