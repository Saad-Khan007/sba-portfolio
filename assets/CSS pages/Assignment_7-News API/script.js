let error = document.getElementById('err');
$(error).hide();
async function FetchAPI() {
    try {
        let news = document.querySelector('.news');
        let url = "https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=9a2f2cf9c3054257975df2dbb82bc3c2";
        let response = await fetch(url);
        let data = await response.json();
        data.articles.forEach(element => {
            news.innerHTML += `
        <div class="box">
            <img src="${element.urlToImage ? element.urlToImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"
                }">
            <div class="box_text">
                <div class="name_Time">
                    <span><b>Author: </b><span>${element.author == null || element.author.startsWith("https://")? "Unknown": element.author.includes('@')? element.author.match(/\((.*?)\)/)[1]: element.author}</span></span>
                    <span>${new Date(element.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) + " " + new Date(element.publishedAt).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</span>
                </div>
                <div class="title">${element.title.slice(0,40)+"..."}</div>
                <div class="desc">${element.description.slice(0,140)+"..."}</div>
                <a target="_blank" href="${element.url}">Read more</a>
            </div>
        </div>
            `
        });
    } catch (err) {
        let con = document.querySelector('.container');
        $(con).hide();
        error.querySelector('h1').innerHTML = err.name
        error.querySelector('h2').innerHTML = err.stack
        $(error).show("slow");
    }
}
FetchAPI();