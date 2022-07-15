const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT
const cors = require("cors");

dotenv.config();

app.use(express.json());
app.use("/users",userRouter);
app.use("/notes",noteRouter);
app.use(cors());

app.get("/",(request,response)=>{
        response.send("Notes API");
});

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    if(PORT == null || PORT == ""){
        PORT = 8080;
    }
    app.listen(PORT,()=>{
        console.log("Server start on port ")
    });
}).catch((error)=>{
    console.log(error);
})

app.get("/", (request,response)=>{
    response.send("hello");
});
