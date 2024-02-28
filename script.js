let searchInput = document.querySelector('#searchInput');
let searchBtn = document.querySelector('#searchBtn');


const getData = async function(searchValue){

    document.querySelector('.text').innerHTML = "";

    let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`);
    let response = await data.json();
    console.log(response);
    let div = document.createElement('div');
    div.classList.add('detail');
    div.innerHTML = `
    <h2>Word :  <span>${response[0].word}</span></h2>
    <p>Meaning : <span>${response[0].meanings[0].definitions[0].definition}</span></p>
    <p>Examples : <span>${response[0].meanings[0].definitions[0].example == undefined ? "Not Found" : response[0].meanings[0].definitions[0].example}</span></p>
    <p>Synonyms : <span>${response[0].meanings[0].synonyms == "" ? "Not Found" : response[0].meanings[0].synonyms}</span></p>
    <p>Antonyms : <span>${response[0].meanings[0].antonyms == "" ? "Not Found" : response[0].meanings[0].antonyms}</span></p>
    <a href=${response[0].sourceUrls[0]} target = "_blank">Read More</a> `;

    document.querySelector('.text').appendChild(div);
}


searchBtn.addEventListener("click" , function(){
    let searchValue = searchInput.value;
    if(searchValue == ""){
        alert('First Enter Word');
    }else{
        getData(searchValue);
    }
})