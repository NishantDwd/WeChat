import jwt from "jsonwebtoken";

const generateJWTAndSetCookie = (userId,res)=>
    {
        const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'15d'}); // generate secret using "openssl rand -base64 32" in gitbash
        res.cookie("jwt",token,{
            maxAge: 15*24*60*60*1000, // in ms
            httpOnly: true,     //prevent XSS attacks - cross site scripting attacks , not access by JS
            sameSite: "strict", //prevent CSRF attackss
            secure: process.env.NODE_ENV !== "development"
        });
    };

export default generateJWTAndSetCookie;
