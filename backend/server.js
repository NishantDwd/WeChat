// Express server ( npm install express dotenv cookie-parser bcryptjs mongoose socket.io jsonwebtoken)
//npm install nodemon --save-dev 
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/auth.routes.js";
import messageRoutes from "./Routes/message.routes.js";
import userRoutes from "./Routes/user.routes.js";

import  connect  from "./db/connect.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;


// So many Routes for Auth -- "instead we use Middleware by Express"

// app.get("/api/auth/signup",(req,res)=>{
//     console.log("SignUp Route");
// });

// app.get("/api/auth/login",(req,res)=>{
//     console.log("login Route");
// });

// app.get("/api/auth/logout",(req,res)=>{
//     console.log("logout Route");
// });

//Using Middlewares

app.use(express.json());  // help to extract data from req.body in controller (to parse req into JSON payloads)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

// app.get("/",(req,res)=>{
//     // root route http://localhost:5000/
//     res.send("Hello Server is Ready!!");

// });

app.listen(PORT,()=> {
    connect();
    console.log(`Server is running on port ${PORT}`);
});
