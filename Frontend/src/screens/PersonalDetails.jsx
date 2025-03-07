import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../component/Navbar";

function PersonalDetails() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    dateOfBirth: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Saving personal details...");

    try {
      const response = await fetch("http://localhost:8080/user/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
           "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("User added successfully!");
      navigate("/additional-details"); // Redirect
    } catch (error) {
      toast.error("Error submitting form");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid" style={{ paddingTop: "80px" }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center mb-4">Personal Details</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={formData.firstName}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={formData.lastName}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={handleChange}
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      onChange={handleChange}
                      type="password"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone">Phone</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                      onChange={handleChange}
                      type="date"
                      className="form-control"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      name="address"
                      value={formData.address}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
