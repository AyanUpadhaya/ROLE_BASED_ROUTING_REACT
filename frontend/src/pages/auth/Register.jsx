import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Register() {
  //handle submit
  const { user, register, isAuthenticated } = useAuth();
  const [loding, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await register(formData);
      navigate("/login");
      alert("Registration successful!");
    } catch (error) {
      alert(`${error?.message || "Registration failed"}`);
      console.log(error?.message || "something went wrong");
    } finally {
      setLoading(false);
    }
  };

  let checkValidation =
    formData.confirmPassword !== formData.password ||
    formData.confirmPassword == "" ||
    formData.password == "" ||
    formData.email == "";

 if (isAuthenticated) return <Navigate to={`/dashboard/${user?.role}`} />;

  return (
    <div className="py-2">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
        {/* password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>

        {/* confirm password */}

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>

        <button
          disabled={checkValidation}
          type="submit"
          className="btn btn-primary"
        >
          {loding ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Register;
