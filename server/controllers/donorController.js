const User = require("../models/userModel");


// Search Donors
const getDonorsController = async (req, res) => {

  try {

    const {
      bloodGroup,
      city,
      district,
      state
    } = req.query;


    let filter = {
      role: "donor"
    };


    if (bloodGroup) {
      filter.bloodGroup = bloodGroup;
    }


    if (city) {
      filter.city = city;
    }


    if (district) {
      filter.district = district;
    }


    if (state) {
      filter.state = state;
    }



    const donors = await User.find(filter)
      .select("-password");


    if (donors.length === 0) {

      return res.status(404).send({
        success:false,
        message:"No donors found"
      });

    }



    res.status(200).send({
      success:true,
      count: donors.length,
      donors
    });



  } catch(error){

    console.log(error);

    res.status(500).send({
      success:false,
      message:"Donor Search Error"
    });

  }

};



module.exports = {
  getDonorsController
};