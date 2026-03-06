import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../../lib/firebase";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );

      const uid = userCredential.user.uid;
      const userDoc = await getDoc(doc(db, "users", uid));
      const userData = userDoc.data();

      if (userData?.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }

      console.log("Logged in successfully");
    } catch (error: any) {
      console.error(error?.message);
    }
  };

  return (
    <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="email">
        Email
      </label>
      <input
        className="form-control"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <label className="form-label" htmlFor="password">
        Password
      </label>
      <input
        className="form-control"
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary">
        Login
      </button>
      <Link to="/forgot-password">Forgot password</Link>
    </form>
  );
}
