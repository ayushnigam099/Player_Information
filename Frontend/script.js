let name= document.getElementById("name");
let date= document.getElementById("date");
let photo= document.getElementById("photo");
let birth= document.getElementById("birth");
let career= document.getElementById("career");
let matches= document.getElementById("matches");
let score= document.getElementById("score");
let fifties= document.getElementById("fifties");
let centuries= document.getElementById("centuries");
let wickets= document.getElementById("wickets");
let average= document.getElementById("average");
let submit= document.getElementById("btn")

submit.addEventListener('click', async function(e){
e.preventDefault();
const details = {
    name: name.value,
    date: date.value,
    photo: photo.value,
    birth: birth.value,
    career: career.value,
    matches: matches.value,
    score: score.value,
    fifties: fifties.value,
    centuries: centuries.value,
    wickets: wickets.value,
    average: average.value,
}; 
try{  
 await axios.post("http://localhost:3500/add-player", details);
}
catch(err)
{
    console.log(err);
}
})