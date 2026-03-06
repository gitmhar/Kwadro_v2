import { useState } from "react";
import { auth, db } from "../../lib/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );

      const user = userCredential.user;

      await sendEmailVerification(user);
      alert("Verification email sent! Please check your inbox!");

      await updateProfile(user, {
        displayName: formData.name,
      });

      await setDoc(doc(db, "users", user.uid), {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        role: "customer",
        createdAt: new Date(),
      });

      console.log("Success!");
      navigate("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="name">
        Name
      </label>
      <input
        className="form-control"
        type="text"
        placeholder="name"
        name="name"
        id="name"
        onChange={handleChange}
      />
      <label className="form-label" htmlFor="email">
        Email
      </label>
      <input
        className="form-control"
        type="email"
        placeholder="email"
        name="email"
        id="email"
        onChange={handleChange}
      />
      <label className="form-label" htmlFor="contact">
        Contact
      </label>
      <input
        className="form-control"
        type="type"
        placeholder="contact"
        name="contact"
        id="contact"
        onChange={handleChange}
      />
      <label className="form-label" htmlFor="password">
        Password
      </label>
      <input
        className="form-control"
        type="password"
        placeholder="password"
        name="password"
        id="password"
        onChange={handleChange}
      />
      <button className="btn btn-primary" type="submit">
        Register
      </button>
    </form>
  );
}
