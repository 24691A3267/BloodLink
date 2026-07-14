import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-danger fw-bold text-center">About BloodLink</h1>

      <p className="mt-4 fs-5">
        BloodLink is an online blood donation management system that connects
        blood donors with patients in need. Our mission is to make finding
        blood donors quick, reliable, and accessible during emergencies.
      </p>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card shadow p-3">
            <h4 className="text-danger">❤️ Our Mission</h4>
            <p>
              Save lives by connecting blood donors and recipients through a
              simple online platform.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h4 className="text-danger">🎯 Our Vision</h4>
            <p>
              Build the largest community of voluntary blood donors.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h4 className="text-danger">🤝 Our Values</h4>
            <p>
              Humanity, trust, transparency, and quick emergency response.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;