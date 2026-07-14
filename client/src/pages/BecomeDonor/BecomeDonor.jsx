import React from "react";
import { useNavigate } from "react-router-dom";

function BecomeDonor() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="text-center">

        <h1 className="text-danger fw-bold">
          Become a Blood Donor
        </h1>

        <p className="mt-3 fs-5">
          Your single blood donation can save up to three lives.
          Join BloodLink today and become a hero for someone in need.
        </p>

      </div>

      <div className="row mt-5">

        <div className="col-md-4">
          <div className="card shadow p-4 text-center">
            <h3>🩸 Donate Blood</h3>
            <p>
              Register yourself as a voluntary blood donor.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-4 text-center">
            <h3>❤️ Save Lives</h3>
            <p>
              Every donation helps patients during emergencies.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-4 text-center">
            <h3>🤝 Join Community</h3>
            <p>
              Become a part of India's growing donor network.
            </p>
          </div>
        </div>

      </div>

      <div className="text-center mt-5">

        <button
          className="btn btn-danger btn-lg"
          onClick={() => navigate("/register")}
        >
          Register as Donor
        </button>

      </div>
    </div>
  );
}

export default BecomeDonor;