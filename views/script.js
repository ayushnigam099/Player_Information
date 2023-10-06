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
let submit= document.getElementById("btn");
let search= document.getElementById("btn-search");
let playerName= document.getElementById('search');
let searchEntry=document.getElementById('entry');
let form= document.getElementById("form");

submit.addEventListener('click', onSubmit)

async function onSubmit(e)
{
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
            alert("Information has been Submitted!");
            form.reset();
            }
    catch(err)
            {
                alert("Error: Please Fill the information again!")
                console.log(err);
            }
            }

search.addEventListener('click', async function(e)
{
    e.preventDefault();
    let playerNamee= playerName.value;
    // console.log(playerNamee);
    try{
        let {data}= await axios.get(`http://localhost:3500/get-player/${playerNamee}`);
        data=data.dataValues;
        create(data);
    }
    catch(err)
    {
        alert("Error: Entry Not Found!")
        console.log(err);
    }
    
})
function create(obj)
{
    // console.log(obj.name);
    let div = document.createElement('div');
    // Creating a Delete Button
    div.className= "new-div";
    div.setAttribute("id", `${obj.id}`);
    let EditButton = document.createElement('button');
    EditButton.innerText="Edit Player";
    EditButton.className= "edt-btn";
    EditButton.addEventListener('click', edit);
    div.innerHTML=`<img src="${obj.photo}" alt="Player's Photo">
    <h4>${obj.name}</h4>
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

async function edit(e){
    e.preventDefault();
    let id= this.parentNode.id;
    console.log(id);

    try{
        let {data}= await axios.get(`http://localhost:3500/id-player/${id}`);
        data=data.dataValues;
        // console.log(data.name);

        // Populate the values to form
        name.value= data.name;
        date.value= data.date;
        photo.value= data.photo;
        birth.value= data.birth;
        career.value= data.career;
        matches.value= data.matches;
        score.value= data.score;
        fifties.value= data.fifties;
        centuries.value= data.centuries;
        wickets.value= data.wickets;
        average.value= data.average;
        // updating the submit event listener
        this.parentNode.remove();
        submit.removeEventListener('click', onSubmit);
        submit.addEventListener('click', (e) => updatePlayer(e, id));

    } 
    catch(err)
    {
        console.log(err);
    }
}

async function updatePlayer(e,id) {
    e.preventDefault();
    // Get the updated details from the form
    const updatedDetails = {
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

    try {
        // Send a PUT request to update the player's details
        await axios.put(`http://localhost:3500/update-player/${id}`, updatedDetails);
        let {data} = await axios.get(`http://localhost:3500/id-player/${id}`);
        data=data.dataValues;
        create(data);
        alert('Player details updated successfully!');
        form.reset();
        submit.addEventListener('click', onSubmit)

    } catch (err) {
        console.error(err);
    }
}
