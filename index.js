const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const userRoute = require('./routes/user.js');
const productRoute = require('./routes/product.js');


// middle ware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/user', userRoute);
app.use('/product', productRoute);

app.listen(3000, ()=>{
  console.log(`The server is listing ${port} now`);
})