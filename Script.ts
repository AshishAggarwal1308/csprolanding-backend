import app from "./App"


app.listen(process.env.PORT,()=>{
    console.log(`server is running : ${process.env.PORT}`)
})