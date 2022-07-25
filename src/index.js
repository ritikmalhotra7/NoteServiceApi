const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
let PORT = process.env.PORT||5000;
const cors = require("cors");

dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/users",userRouter);
app.use("/notes",noteRouter);

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Server start on port "+PORT)
    });
}).catch((error)=>{
    console.log(error);
});
