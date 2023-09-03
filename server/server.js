import express from 'express' ;
import mongoose from 'mongoose' ;
import cors from 'cors' ;
import dotenv from 'dotenv' ;
import router from './Routes/routes.js';

const app = express() ;
const PORT = 8000 ;
app.use(cors()) ;
app.use('/' , router) ;

dotenv.config() ;
const USERNAME = process.env.DB_USERNAME ;
const PASSWORD = process.env.DB_PASSWORD ;

const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@file.drx7jvp.mongodb.net/file?retryWrites=true&w=majority` ;

mongoose.connect(MONGODB_URL , { useNewUrlParser: true })

mongoose.connection.on('connected' , ()=>{
    console.log("DB is connected")
})

mongoose.connection.on('disconnected' , ()=>{
    console.log("Oops DB is disconnected")
})
mongoose.connection.on('error' , (error)=>{
    console.log("Some error whole connecting to DB")
})

app.listen(PORT ,()=>{
    console.log(`You are on PORT : ${PORT}`) ;
})