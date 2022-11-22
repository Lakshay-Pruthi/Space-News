let searchBtn = document.getElementById("searchInput");
searchBtn.addEventListener("change", search);

let newsBox = document.getElementById('newsBox')
function search(){
   let query = document.getElementById('searchInput').value
   newsBox.innerHTML = ""
let a = fetch("https://images-api.nasa.gov/search?q=" + query)
a.then((val)=>{
    return val.json()
}).then((values)=>{
    for(elem in values.collection.items){
        newsBox.innerHTML += `<div class="imgBox"><img src ="${values.collection.items[elem].links[0].href}"><br><h3>${values.collection.items[elem].data[0].title}</h3></div>`
    }
})
}