const express=require("express")
const app=express()

app.get("/",(req,res)=>
{
    res.send("<h1>Hello from express</h1>")
})

app.get("/about",(req,res)=>
    {
        res.send("<h1>About page</h1>")
    })

app.get("/home",(req,res)=>
    {
        res.send("<h1 style='text-align:bottom'>-- HOME --</h1>")
    })

app.use((req,res)=>
{
    res.send("<h1>Page not found 404</h1>")
})

app.listen(4500,()=>console.log("Express server running at 4500"))
