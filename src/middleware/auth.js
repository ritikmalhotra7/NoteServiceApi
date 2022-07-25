const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const auth = (request,response,next)=>{
    try{
        let token = request.headers.authorization 
        if(token){
            token = token.split(" ")[1];
            let user = jwt.verify(token, "Notes_api"); 
            request.userId = user.id;
        }else{
            return response.status(401).json({message:"Unauthorized User"});
        }
        next();
    }catch(error){
        console.log(error);
        response.status(401).json({message:"Unathorized User"}); 
    }
};
module.exports = auth;