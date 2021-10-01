const express = require('express');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 9000

app.use("/api/v1", (req, res, next) => {
    res.json({
        message: "Testing heroku deploy"
    })
})
app.use("/api/v1/users", (req, res) => {
    res.json([
        {
            id: 1,
            firstname: "sheyko",
            lastname: "wk",
            email: "sheyko.wk@gmail.com"
        }
    ])
})











app.listen(PORT, ()  => {
    console.log(`Server online at port ${PORT}`)
})

exports.app = app;