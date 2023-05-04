const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors');

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');
const reviews = require('./data/reviews.json');


app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World chef!')
});
app.get('/chefs',(req,res)=>{
  res.send(chefs);
});
app.get('/chefs/:id',(req,res)=>{
  const id = req.params.id;
  let chef = chefs.find(c => c.id===id);
  res.send(chef);
});
app.get('/recipes',(req,res)=>{
  res.send(recipes);
});
app.get('/recipes/:ids',(req,res)=>{
  let ids = (req.params.ids.split('-'));
  const result = recipes.filter(recipe => ids.includes(recipe.id))
  
  res.send(result);
});
app.get('/reviews',(req,res)=>{
  res.send(reviews);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})