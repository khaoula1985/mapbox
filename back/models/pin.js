const mongoose = require("mongoose");

const pinSchema = new mongoose.Schema({
  username:{ 
    type: String,
    required: true
     },
  title: { 
    type: String, 
    required: true, 
    unique: true },
  description:{ 
    type: String
  },
   rating:
   { type: Number, required: true },
   lat:
   { type: Number, required: true },
   long:
   { type: Number, required: true }
});
   

module.exports = mongoose.model("Pin", pinSchema);