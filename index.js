const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors');

const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World chef!')
});
app.get('/chefs',(req,res)=>{
  res.send(chefs);
});
app.get('/chefs/:id',(req,res)=>{
  const id = req.params.id;
  const chef = chefs.find(c => c.id===id);
  res.send(chef);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})