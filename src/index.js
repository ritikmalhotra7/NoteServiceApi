const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
let PORT = process.env.PORT
const cors = require("cors");

dotenv.config();

app.use(express.json());
app.use("/users",userRouter);
app.use("/notes",noteRouter);
app.use(cors());

app.get("/",(request,response)=>{
        response.send("Notes API");
});
console.log(process.env.MONGO_URL);
mongoose.connect( "mongodb+srv://admin:ritik123@cluster0.r910w.mongodb.net/notes_db?retryWrites=true&w=majority")
.then(()=>{
    if(PORT == null || PORT == ""){
        PORT = 8834;
    }
    app.listen(1234,()=>{
        console.log("Server start on port ")
    });
}).catch((error)=>{
    console.log(error);
})

app.get("/", (request,response)=>{
    response.send("hello");
});
