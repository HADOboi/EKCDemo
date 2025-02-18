const express=require("express")
const app=express()
app.use(express.json())    

app.get("/products",(req,res)=>
{
    res.send("<h1>Product Details</h1>")
})

app.post("/products",(req,res)=>
{
    console.log("This is the data recieved",req.body)
    res.send("<h1Product saved succesfully</h1>")

})

app.put("/products",(req,res)=>
{
    res.send("<h1>Prodcut updated succesfully</h1>")
})

app.delete("/products",(req,res)=>
{
    res.send("<h1>Product deleted successfully</h1>")
})


app.listen(5000,()=>console.log("Express server running at 5000"))