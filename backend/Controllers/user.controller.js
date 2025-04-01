import User from "../models/user.model.js";

export const getUsersForSidebar = async (req,res)=>{
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id : {$ne: loggedInUserId}}).select("-Password"); // find every user from database except our id, as when we display users in sidebar , we dont want our own profile
        
        res.status(200).json(filteredUsers);
        
    } catch (error) {
        console.error("Error in getUserForSidebar: ",error.message);
        res.status(500).json({error: "Internal Server Error!"});
    }
};