const Location = require("../models/Location");


// Search locations
const searchLocationController = async(req,res)=>{

  try{

    const {search} = req.query;


    const locations = await Location.find({

      city:{
        $regex: search,
        $options:"i"
      }

    })
    .limit(10);



    res.status(200).send({
      success:true,
      locations
    });


  }catch(error){

    console.log(error);

    res.status(500).send({
      success:false,
      message:"Location search error"
    });

  }

};



module.exports={
  searchLocationController
};