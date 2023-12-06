const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const memberRoute = require('./routes/member')
const bookRoute = require('./routes/book')
const orderRoute = require('./routes/order')
const postRoute = require('./routes/forum')
const cartRoute = require('./routes/cart')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://21021458:chinh2003@mycluster.jogeeba.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.log(err))

app.listen(3001, () => {
    console.log('server running on 3001');
})

app.use('/user', memberRoute)
app.use('/book', bookRoute)
app.use('/order', orderRoute)
app.use('/post', postRoute)
app.use('/cart', cartRoute)