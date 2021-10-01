const express = require('express');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 9000

app.get("/api/v1/users", (req, res, next) => {
    res.json({
        id: 1,
        firstname: "sheyko",
        lastname: "wk",
        email: "sheyko.wk@gmail.com"
    })
})

app.get("/api/v1", (req, res, next) => {
    res.json({
        message: "Testing heroku deploy"
    })
})



app.listen(PORT, ()  => {
    console.log(`Server online at port ${PORT}`)
})

exports.app = app;