import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName : {
            type: String,
            required: true
        },
        Username : {
            type: String,
            required: true,
            unique: true
        },
        Password: {
            type: String,
            required: true,
            minLength: 7
        },
        gender : {
            type: String,
            required: true,
            enum: ["male","female"]
        },
        profilepic : {
            type: String,
            default: ""
        }
    },{timestamps: true}
);

const User = mongoose.model("User",userSchema);

export default User;