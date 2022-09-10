import express from 'express'
import mongoose from 'mongoose'
import Post from './Post.js'
import router from './Router.js'

const PORT = process.env.PORT ?? 3000
const DB_URL = `mongodb+srv://Aydar:Dabstep16@cluster0.ngdmplq.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => {console.log(`Server started on PORT ${PORT}...`)})
    }catch (e){
        console.log(e)
    }
}

startApp()