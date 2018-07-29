const express = require("express")
const autoprefixer = require("express-autoprefixer")
const root = "./gridandflexbox.html"
const path = require("path")

const port = 8078

 const app = express()
    // .use(autoprefixer({
    //     browsers: "last 2 versions", 
    //     cascade: false
    // }))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/gridandflexbox.html"))
})

app.listen(port)

console.log(`==> Express ready on port ${port}`)

