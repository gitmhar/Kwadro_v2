import { useEffect } from "react";
import { socket } from "./lib/socket";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to backend socket ID: ", socket.id);
    });

    return () => {
      socket.off("connect");
    };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* Services */}
          <Route path="/book" element={<Reservation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
