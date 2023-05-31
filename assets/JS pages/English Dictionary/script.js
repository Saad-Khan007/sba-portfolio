let input = document.getElementById('word');
let mean = document.getElementById('mean');
let title = document.getElementById('title');
let info = document.getElementById('info');
let audioEl = document.getElementById('audio');
let hide = document.querySelectorAll('.p');
async function fetchAPI(word) {
    try {
        info.style.display = "block";
        audioEl.style.display = "none";
        hide[0].style.display = "none";
        hide[1].style.display = "none";
        info.innerHTML = `Searching meaning of "${word}"`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) => res.json());
        info.style.display = "none";
        title.textContent = " " + word.toUpperCase();
        mean.innerHTML = " " + result[0].meanings[0].definitions[0].definition;
        audioEl.src = result[0].phonetics[0].audio;
        console.log(result[0])
        audioEl.style.display = "block";
        hide[0].style.display = "block";
        hide[1].style.display = "block";
    } catch (error) {
        console.log(error);
    }
}
input.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value)
    }
})