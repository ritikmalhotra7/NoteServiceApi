const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const SECRET_KEY = process.env.SECRET_KEY;

dotenv.config();

const auth = (request,response,next)=>{
    console.log("SECRETTTTTTTTTTTTTTTTTTTTTTTTTtTTTTTTT:"+SECRET_KEY);
    try{
        let token = request.headers.authorization 
        if(token){
            token = token.split(" ")[1];
            let user = jwt.verify(token, SECRET_KEY); 
            request.userId = user.id;
        }else{
            console.log(error);
            return response.status(401).json({message:"Unauthorized User"});
        }
        next();
    }catch(error){
        console.log(error);
        response.status(401).json({message:"Unathorized User"}); 
    }
};
module.exports = auth;