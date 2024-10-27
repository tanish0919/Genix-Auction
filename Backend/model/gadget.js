import mongoose from "mongoose";

const gadgetSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true,
    },
    imageUrl:{
        type: String,
        required: true,
    },
    sellingPrice:{
        type: Number,
        required: true,
    },
    sellingPrice:{
        type: Number,
        required: true,
    },
    biddingPrice:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
    }

})


const Gadget = mongoose.model("Gadget", gadgetSchema);

export default Gadget;