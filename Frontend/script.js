const name= document.getElementById("name");
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
let submit= document.getElementById("btn");
let search= document.getElementById("btn-search");
let playerName= document.getElementById('search');
let searchEntry=document.getElementById('entry');

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
search.addEventListener('click', async function(e)
{
    e.preventDefault();
    playerName= playerName.value;
    // console.log(playerName);
    try{
        let {data}= await axios.get(`http://localhost:3500/get-player/${playerName}`);
        data=data.dataValues;
        create(data);
    }
    catch(err)
    {
        console.log(err);
    }
    
})
function create(obj)
{
    // console.log(obj.name);
    let div = document.createElement('div');
    // Creating a Delete Button
    div.className= "new-div";
    let EditButton = document.createElement('button');
    EditButton.innerText="Edit Player";
    EditButton.className= "edt-btn";
    div.innerHTML=`<img src="${obj.photo}" alt="Player's Photo">
    <h4>Player's Name: ${obj.name}</h4>
    <p>Date Of Birth: ${obj.date} </p>
    <h3>Player Information</h3>
    <pre> ${obj.career}</pre>
    <p>Place of Birth: ${obj.birth} </p>
    <p>Matches: ${obj.matches} </p>
    <p> Runs: ${obj.score}</p>
    <p> Fifties: ${obj.fifties}</p>
    <p> Centuries: ${obj.centuries}</p>
    <p> Wickets: ${obj.wickets}</p>
    <p> Average: ${obj.average}</p>`
    // Adding the EDIT button to the new Div created above
    div.appendChild(EditButton);
    searchEntry.appendChild(div);
}

