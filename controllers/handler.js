const Player= require("../model/player");

exports.addPlayer= async (req,res,next)=>
{
    // console.log(req.body);

    try{
     const name= req.body.name;
     const date= req.body.date;
     const photo=req.body.photo;
     const birth=req.body.birth;
     const career= req.body.career;
     const matches= req.body.matches;
     const score= req.body.score;
     const fifties= req.body.fifties;
     const centuries= req.body.centuries;
     const wickets= req.body.wickets;
     const average= req.body.average;
     const {dataValues}= await Player.create({
        name,
        date,
        photo,
        birth,
        career,
        matches,
        score,
        fifties,
        centuries,
        wickets,
        average
      })
          console.log("data",dataValues) ;
          res.status(200).json({Success: dataValues});   
          }
      catch(err)
      {
          console.log(err);
          res.status(400).json({failed: "Error Occurred"});
      }

}

exports.getPlayer=  async(req,res,next)=>
{
 let name= req.params.name;
// console.log(name);
let dataValues = await Player.findOne({
  where: {
    name: name
  }
});
console.log(dataValues);
  if(!dataValues){
    res.status(400).json({Error: "Record Not Found"});
    return;
  }
  else
  {
    dataValues= dataValues.dataValues;
    res.status(200).json({dataValues: dataValues})
  }
}

exports.getIDPlayer= async(req,res,next)=>
{
  let id= req.params.id;
  // console.log(name);
  let dataValues = await Player.findByPk(id);
  console.log(dataValues);
    if(!dataValues){
      res.status(400).json({Error: "Record Not Found"});
      return;
    }
    else
    {
      dataValues= dataValues.dataValues;
      res.status(200).json({dataValues: dataValues})
    }
}

exports.updatePlayer= async(req,res,next)=>
{
  let userID= req.params.id;
  try {
     let updatedDetails={ 
         name: req.body.name,
         date: req.body.date,
         photo:req.body.photo,
         birth:req.body.birth,
         career: req.body.career,
         matches: req.body.matches,
         score: req.body.score,
         fifties: req.body.fifties,
         centuries: req.body.centuries,
         wickets: req.body.wickets,
         average: req.body.average
    }
      // Update the player's details where name matches playerName
      let data = await Player.update(updatedDetails, {
          where: { id: userID },
          returning: true, // Return the updated record(s)
      });
          console.log(`Player updated successfully.`);
         
          res.status(202).json({Success: "Updated Successfully"});
  } catch (err) {
    console.error(`Error updating player:`, err);
    // res.status(400).json({Error: "Record Not Found"});
  }
}
