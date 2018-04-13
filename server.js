const express = require("express")
const autoprefixer = require("express-autoprefixer")
const root = "./gridandflexbox.html"
const path = require("path")

 const app = express()
    // .use(autoprefixer({
    //     browsers: "last 2 versions", 
    //     cascade: false
    // }))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/gridandflexbox.html"))
})

app.listen(8079)

console.log("==> Express ready on port 8079")

