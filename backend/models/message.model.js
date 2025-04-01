import mongoose from 'mongoose';

const mesgSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message:{
        type: String,
        required: true
    }
},{timestamps: true}); // due to timestamps , we have "created at" and "updated at" field to check in real time

const Message = mongoose.model("Message",mesgSchema);

export default Message;
