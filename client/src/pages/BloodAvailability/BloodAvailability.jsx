import React, { useState } from "react";

function BloodAvailability() {
  const [bloodGroup, setBloodGroup] = useState("");

  const donors = [
    { name: "Rahul Kumar", group: "A+", city: "Hyderabad" },
    { name: "Sneha Reddy", group: "B+", city: "Bangalore" },
    { name: "Amit Sharma", group: "O+", city: "Delhi" },
    { name: "Priya Singh", group: "AB+", city: "Chennai" },
    { name: "Kiran", group: "O-", city: "Hyderabad" },
    { name: "Anjali", group: "A-", city: "Mumbai" },
  ];

  const filteredDonors = bloodGroup
    ? donors.filter((donor) => donor.group === bloodGroup)
    : donors;

  return (
    <div className="container mt-5">
      <h1 className="text-center text-danger mb-4">
        Blood Availability
      </h1>

      <div className="mb-4">
        <label className="form-label fw-bold">
          Select Blood Group
        </label>

        <select
          className="form-select"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
        >
          <option value="">All Blood Groups</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>AB-</option>
          <option>O+</option>
          <option>O-</option>
        </select>
      </div>

      <div className="row">
        {filteredDonors.map((donor, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow p-3">
              <h4 className="text-danger">{donor.group}</h4>

              <h5>{donor.name}</h5>

              <p>📍 {donor.city}</p>

              <button className="btn btn-danger">
                Contact Donor
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BloodAvailability;