import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateJWTAndSetCookie from "../utils/generateJWT.js";

export const login = async(req,res)=>{
   try {
        const {Username,Password} = req.body;

        const user = await User.findOne({Username});
        const checkPass = await bcrypt.compare(Password, user?.Password || "");

        if(!user || !checkPass){
            return res.status(400).json({error:"Invalid Credentials!"});
        }

        generateJWTAndSetCookie(user._id,res);

        res.status(200).json({
            _id : user._id,
            fullName: user.fullName,
            username: user.Username,
            profilepic: user.profilepic,
            gender: user.gender
        });


   } catch (error) {
        console.log("Error in Login Controller!",error.message);
        res.status(500).json({error:"Internal Server Error!"});
   }
};

export const logout = (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message: "Logged Out Successfully!"});

    } catch (error) {
        console.log("Error in Logout Controller!",error.message);
        res.status(500).json({error:"Internal Server Error!"});
    }
};

export const signup = async(req,res)=>{
    try {
        const {fullName,Username,Password,cnfPassword,gender} = req.body;

        if (!Username) {
            return res.status(400).json({ error: "Username is required!" });
        }

        if(Password!==cnfPassword){
            return res.status(400).json({error:"Password don't match"});
        }

        const user = await User.findOne({Username});

        if(user){
            return res.status(400).json({error:"Username Already exist!"});
        }

        //hashed password

        const salty = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(Password,salty);


        // for profile pic: https://avatar-placeholder.iran.liara.run/avatar/200/200/any

        const boypic = `https://avatar.iran.liara.run/public/boy?username=${Username}`;
        const girlpic = `https://avatar.iran.liara.run/public/girl?username=${Username}`;

        const newUser = new User({
            fullName,
            Username,
            Password: hashPass,
            gender,
            profilepic: gender==="male"? boypic : girlpic   
        })

       if(newUser){
        // Generate JWT token here 
        generateJWTAndSetCookie(newUser._id,res);

        await newUser.save(); // save to database

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            Username: newUser.Username,
            profilepic: newUser.profilepic        
        });
       }else{
            res.status(400).json({error:"Invalid user data!"});
       }

         

    } catch (error) {
        console.log("Error in signup controller",error.message);
        res.status(500).json({error:"Internal Server error!"});
    }
};

