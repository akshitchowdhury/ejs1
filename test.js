
import express from 'express'

const app = express()
const port = 3000

app.listen(port , ()=>{
    console.log("listening on port "+ port)
})

app.get("/", (req,res)=>{

        const name = "Devashura"
        const agent = 47

    res.render("test.ejs", {

        v1 : name,
        v2 : agent

    })
})