
//DB connection
const connectDB=require('./db/connect')
require("dotenv").config()

//imports
const express=require("express")
const app=express()
const router=require('./routes/route')
const notFound=require('./middleware/not_found')

//TaskModel
const Task=require('./models/Task')

//Json
app.use(express.json())

//Front
app.use(express.static('./public'))
//Router
app.use('/task',router)

//Non existant pages
// app.use(notFound)
//Server Port

const connect =async()=>{
    try {
        await connectDB(process.env.URI)
        app.listen(5000,()=>{
            console.log("Server Listening on port 5000...")
        })

    } catch (error) {
        console.log(error)
    }
}

connect()



