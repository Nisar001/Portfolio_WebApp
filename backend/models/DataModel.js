import mongoose from "mongoose";
const senderRegSchema = new mongoose.Schema({
   senderName: {
      type: String, required: [true, "Name is Required"],
      trim: true, 
   },
   senderEmail:{
      type: String, required: [true, "Email is Required"],
      trim: true,
   },
   senderMessage: {
      type: String, required: [true, "Message is Required"],
   },
   Date: {
      type: Date, required: [true, "Date is Required"],
   },
});

const SenderRegModel = mongoose.model("senderrecord", senderRegSchema);

export default SenderRegModel;