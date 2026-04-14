import { useEffect } from "react";
import "../utils/stylesheets/style.css";
import { useAuth } from "../context/AuthContext";
import TestCheckoutButton from "./reservation/Success";

export default function Home() {
  useEffect(() => {
    // Remove any leftover backdrops and reset body scrolling
    const backdrops = document.querySelectorAll(".modal-backdrop");
    backdrops.forEach((b) => b.remove());
    document.body.style.overflow = "auto";
    document.body.classList.remove("modal-open");
  }, []);

  const { user, role } = useAuth();

  console.log("Current session owner UID:", user?.uid);
  return (
    <div>
      {user ? (
        <h1>
          Welcome, {role} {user.displayName}!
        </h1>
      ) : (
        <h1>You are not logged in!</h1>
      )}
      <TestCheckoutButton />
    </div>
  );
}
