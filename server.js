const express = require("express");
const connectDB = require("./db/connect");
const router = require("./routes/todo");
require("dotenv").config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.use('/api/tasks', router);
app.get('/api', (req, res)=>{
    res.send("Successful")
})

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL).then(()=>{
            app.listen(PORT, console.log(`Server is running on port ${PORT}`));
        })
    } catch (error) {
        console.log(error);
    }
}

start();
