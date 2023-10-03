const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const express= require('express');
const cors= require('cors')
const app = express();
const sequelize= require('./connection/database');
app.use(bodyParser.json({extended:false}));
app.use(cors());

const Player = sequelize.define('Player', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
      
    },
   
    date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      photo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birth: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      career: {
        type: Sequelize.STRING,
        allowNull: false,
      },
     matches: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    score: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
    fifties: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
    centuries: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
    wickets: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
     average: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
  });

  app.post('/add-player', async (req,res,next)=>
  {
      console.log(req.body);
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
       const {dataValues}= await Expense.create({

        })
            console.log("data",dataValues) ;
            res.status(200).json({Success: dataValues});   
            }
        catch(err)
        {
            console.log(err);
            res.status(400).json({failed: "Error Occurred"});
        }

  })


  sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(3500, ()=>
{
    console.log("Server Is Started!");
})})
  .catch(err => {
    console.log(err);
});