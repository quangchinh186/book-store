const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://quangchinh1122:chinh2003@uetinder.bmmhsoe.mongodb.net/?retryWrites=true&w=majority")

app.listen(3001, () => {
    console.log('server running on 3001');
})