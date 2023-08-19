const accesskey = "p5RcVZBHambaCWHYwgN9kMIX5raxDhGXdvnq1wid6Hc"
const formEl = document.querySelector("form")
const inputEl = document.getElementById("inp1")
const searchResults = document.querySelector(".search-results")
const showMore=document.getElementById("show")
let inputData = ""
let page = 1;
async function searchimage() {
    inputData=inputEl.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    if (page===1){
        searchResults.innerHTML=""

    }
    results.map((result)=>{
        const imagewrapper = document.createElement("div");
        imagewrapper.classList.add("search-result");
        const image =document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imagelink= document.createElement('a');
        imagelink.href=result.links.html;
        imagelink.target="_blank";
        imagelink.textContent= result.alt_description;
          
        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imagelink);
        searchResults.appendChild(imagewrapper);

    });
    page++
    if(page>1){
        showMore.style.display="block"
    }
}
formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1;
    searchimage()


})

showMore.addEventListener("click",()=>{
    searchimage()
})