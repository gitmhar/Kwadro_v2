import { useEffect } from "react";
import { socket } from "./lib/socket";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Reservation from "./pages/reservation/Reservation";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Dashboard from "./pages/admin/Dashboard";
import Success from "./pages/Success";
import theme from "./theme/theme";
import TableGrid from "./components/booking/TableGrid";
import TestModal from "./components/booking/TestModal";

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            {/* Auth */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* Admin */}
            <Route path="/admin-dashboard" element={<Dashboard />} />
            {/* Services */}
            <Route path="/book" element={<Reservation />} />
            <Route path="/table" element={<TableGrid />} />
            <Route path="/modal" element={<TestModal />} />
            {/* Response */}
            <Route path="/success" element={<Success />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
