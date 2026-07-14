import "./BloodSearch.css";
import { useState } from "react";

function BloodSearch() {

  const [bloodGroup, setBloodGroup] = useState("");

  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [donors, setDonors] = useState([]);
  const [message, setMessage] = useState("");



  // Location autocomplete
  const searchLocation = async (value) => {

    setCity(value);

    if (value.length < 2) {
      setSuggestions([]);
      return;
    }


    try {

      const response = await fetch(
        `http://localhost:5000/api/locations?search=${value}`
      );


      const data = await response.json();


      if (data.success) {
        setSuggestions(data.locations);
      }


    } catch(error) {

      console.log(error);

    }

  };



  // Select location
  const selectLocation = (location) => {

    setCity(location.city);
    setDistrict(location.district);
    setState(location.state);

    setSuggestions([]);

  };





  // Search donors
  const searchDonors = async () => {

    try {

      const params = new URLSearchParams();


      if (bloodGroup)
        params.append("bloodGroup", bloodGroup);


      if (city)
        params.append("city", city);


      if (district)
        params.append("district", district);


      if (state)
        params.append("state", state);



      const url =
        `http://localhost:5000/api/donors?${params.toString()}`;


      console.log("SEARCH URL:", url);



      const response = await fetch(url);


      const data = await response.json();


      console.log("DONOR RESPONSE:", data);



      if (data.success && data.donors.length > 0) {

        setDonors(data.donors);
        setMessage("");

      } 
      else {

        setDonors([]);
        setMessage("No donors found");

      }


    } catch(error) {

      console.log(error);

      setDonors([]);

      setMessage("Server error");

    }

  };






  return (

    <div className="blood-search">


      <h2>
        🩸 Search Blood Donors
      </h2>



      <div className="search-box">



        <label>
          🩸 Blood Group
        </label>


        <select
          value={bloodGroup}
          onChange={(e)=>setBloodGroup(e.target.value)}
        >

          <option value="">
            Select Blood Group
          </option>

          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
          <option>AB+</option>
          <option>AB-</option>

        </select>




        <label>
          🏙️ City
        </label>


        <input
          placeholder="Search City"
          value={city}
          onChange={(e)=>searchLocation(e.target.value)}
        />




        <label>
          🗺️ District
        </label>


        <input
          placeholder="District"
          value={district}
          readOnly
        />




        <label>
          🌍 State
        </label>


        <input
          placeholder="State"
          value={state}
          readOnly
        />



      </div>





      {
        suggestions.length > 0 &&

        <div className="suggestions">

          {
            suggestions.map((item)=>(

              <div

                className="suggestion-item"

                key={item._id}

                onClick={()=>selectLocation(item)}

              >

                {item.city} - {item.district} - {item.state}

              </div>

            ))
          }

        </div>

      }





      <br/>


      <button onClick={searchDonors}>
        Search
      </button>





      <h3>
        {message}
      </h3>






      <div className="donor-container">


      {
        donors.map((donor)=>(


          <div
            className="donor-card"
            key={donor._id}
          >


            <h3>
              👤 {donor.name}
            </h3>



            <h2>
              🩸 {donor.bloodGroup}
            </h2>



            <p>
              📍 {donor.address}
            </p>



            <p>
              📞 {donor.phone}
            </p>



            <p>
              ✉ {donor.email}
            </p>



            <p>

              {
                donor.available
                ?
                "🟢 Available"
                :
                "🔴 Not Available"
              }

            </p>




            <div className="donor-actions">


              <a href={`tel:${donor.phone}`}>
                📞 Call
              </a>



              <a href={`mailto:${donor.email}`}>
                ✉ Email
              </a>


            </div>



          </div>


        ))
      }


      </div>



    </div>

  );

}


export default BloodSearch;