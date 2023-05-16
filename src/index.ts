const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const routes  = require('./routes/todoRoute');
const cors = require("cors")
const app = express()

let PORT:number= 9000
const dbURL:string= `mongodb+srv://onkar79:A29b08c95%23@cluster0.wu9uxbw.mongodb.net/test`

 app.listen(PORT,()=>{
  console.log('Listening to 9000')
 })

 app.use(cors())

 mongoose.connect(dbURL,{dbName:"todo"}, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log("CONNECTED TO DATABASE");
});

app.use(bodyParser.json());
app.use(routes);
