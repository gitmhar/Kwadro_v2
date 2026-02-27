import { useEffect } from "react";
import "../utils/stylesheets/style.css";

export default function Home() {
  useEffect(() => {
    // Remove any leftover backdrops and reset body scrolling
    const backdrops = document.querySelectorAll(".modal-backdrop");
    backdrops.forEach((b) => b.remove());
    document.body.style.overflow = "auto";
    document.body.classList.remove("modal-open");
  }, []);

  return <h1>hello</h1>;
}
