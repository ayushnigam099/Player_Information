const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const express= require('express');
const cors= require('cors')
const app = express();

const addPlayerRoute= require("./routes/add-player")
const getPlayerRoute= require("./routes/get-player")
const getIDRoute= require("./routes/id-player")
const updatePlayerRoute= require("./routes/update-player");

const sequelize= require('./connection/database');
app.use(bodyParser.json({extended:false}));
app.use(cors());
const Player= require("./model/player");


app.use('/add-player', addPlayerRoute);
app.use('/get-player',getPlayerRoute);
app.use('/id-player', getIDRoute);
app.use('/update-player', updatePlayerRoute );


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