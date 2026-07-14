import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-danger mb-4">
        Contact BloodLink
      </h1>

      <div className="row">

        <div className="col-md-5">
          <div className="card shadow p-4">

            <h3 className="text-danger">
              Contact Information
            </h3>

            <hr />

            <p><strong>📍 Address:</strong> Hyderabad, Telangana</p>

            <p><strong>📞 Phone:</strong> +91 9876543210</p>

            <p><strong>📧 Email:</strong> support@bloodlink.com</p>

            <p>
              We are available 24/7 for emergency blood requests.
            </p>

          </div>
        </div>

        <div className="col-md-7">

          <div className="card shadow p-4">

            <h3 className="mb-4 text-danger">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit}>

              <input
                className="form-control mb-3"
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                className="form-control mb-3"
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <textarea
                className="form-control mb-3"
                rows="5"
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              />

              <button
                className="btn btn-danger"
                type="submit"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;