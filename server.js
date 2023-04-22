const express = require("express");
const connectDB = require("./db/connect");
require("dotenv").config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.get('/api', (req, res)=>{
    res.send("Successful")
})

const start = async ()=>{
    try {
        await connectDB('mongodb+srv://admin:admin@cluster0.imbp9t9.mongodb.net/?retryWrites=true&w=majority').then(()=>{
            app.listen(PORT, console.log(`Server is running on port ${PORT}`));
        })
    } catch (error) {
        console.log(error);
    }
}

start();
