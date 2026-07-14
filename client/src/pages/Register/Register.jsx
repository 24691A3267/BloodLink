import { useState } from "react";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    bloodGroup: "",
    city: "",
    district: "",
    state: "",
    age: "",
    gender: "",
    role: "donor",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Registration Successful!");
        console.log(data);
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error(error);
      alert("Unable to connect to server.");
    }
  };

  return (
    <div style={{ maxWidth: "450px", margin: "40px auto" }}>
      <h1>Register</h1>

      <form onSubmit={handleRegister}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          required
        />
        <br /><br />

        <select
          name="bloodGroup"
          onChange={handleChange}
          required
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <br /><br />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="district"
          placeholder="District"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="state"
          placeholder="State"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          required
        />

        <br /><br />

        <select
          name="gender"
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <br /><br />

        <select
          name="role"
          onChange={handleChange}
          defaultValue="donor"
        >
          <option value="donor">Donor</option>
          <option value="hospital">Hospital</option>
        </select>

        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;