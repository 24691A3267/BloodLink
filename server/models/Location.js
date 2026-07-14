const mongoose = require("mongoose");


const locationSchema = new mongoose.Schema(
{
  city:{
    type:String,
    required:true
  },

  district:{
    type:String,
    required:true
  },

  state:{
    type:String,
    required:true
  }
},
{
  timestamps:true
}
);


module.exports = mongoose.model(
  "Location",
  locationSchema
);