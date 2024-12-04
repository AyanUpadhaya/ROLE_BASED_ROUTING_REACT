import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

function Login() {
  const { user, login, isAuthenticated } = useAuth();
  const [loding, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(formData);
      navigate("/dashboard");
    } catch (error) {
      alert(`${error?.message || "Login failed"}`);
      console.log(error?.message || "something went wrong");
    } finally {
      setLoading(false);
    }
  };

  let checkValidation = formData.password == "" || formData.email == "" || loding;

  if (isAuthenticated) return <Navigate to={`/dashboard/${user?.role}`} />;

  return (
    <div className="py-2">
      <h2>Login</h2>
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

        <button
          disabled={checkValidation}
          type="submit"
          className="btn btn-primary"
        >
          {loding?"Loading...":"Submit"}
        </button>
      </form>
    </div>
  );
}

export default Login;
