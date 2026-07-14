const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Location = require("../models/Location");

dotenv.config();


const locations = [

  {
    city: "Madanapalle",
    district: "Annamayya",
    state: "Andhra Pradesh"
  },

  {
    city: "Nellore",
    district: "Sri Potti Sri Ramulu Nellore",
    state: "Andhra Pradesh"
  },

  {
    city: "Tirupati",
    district: "Tirupati",
    state: "Andhra Pradesh"
  },

  {
    city: "Hyderabad",
    district: "Hyderabad",
    state: "Telangana"
  },

  {
    city: "Madurai",
    district: "Madurai",
    state: "Tamil Nadu"
  },

  {
    city: "Delhi",
    district: "New Delhi",
    state: "Delhi"
  },

  {
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharashtra"
  }

];


const importData = async()=>{

 try{

   await mongoose.connect(process.env.MONGO_URL);

   await Location.deleteMany();

   await Location.insertMany(locations);


   console.log("Locations Imported Successfully");

   process.exit();


 }catch(error){

   console.log(error);

   process.exit(1);

 }

};


importData();