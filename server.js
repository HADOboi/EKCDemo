const express=require("express")
const app=express()

app.get("/",(req,res)=>
{
    res.send("<h1>Welcome to Ecommerce</h1>")
})

app.get("/products/:id",(req,res)=>
    {
        let prodid = req.params.id
        res.send(`Details of product with id ${prodid}`)
    })

app.get("/search",(req,res)=>
    {
        if(req.query.name && req.query.cate)
            res.send(`<h1>Details for serched product with name ${req.query.name} and Category ${req.query.cate}</h1>`)
        else
            res.send(`<h1>search require both name and category</h1>`)
    })

app.listen(4000,()=>console.log("Express server running at 4000"))