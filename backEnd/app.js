const express=require('express')
const app=express()
const mongoose=require('mongoose')


const userCollection=require('./models/userSchema')
const routes=require('./routes/routes')

mongoose.connect('mongodb://127.0.0.1:27017/reactWebApplication',{
    useNewUrlParser:true,
    useUnifiedTopology:true
    },(err)=>{
    if(err){
        console.log('Cannot connect to Data Base')
        console.log(err)
    }else{
        console.log('Data Base connected')
    }
})

const cors=require('cors')
app.use(
    cors({
        origin:["http://localhost:3000"],
        method:["GET","POST"],
        credentials:true,
    })
)

app.use(express.urlencoded({extended:true}))//to get data from post method
app.use(express.json())//to recieve the data in json format from the axios call

app.use('/',routes)

app.listen(8000,()=>console.log('Server started'))