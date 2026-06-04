import { useEffect } from "react";
import { socket } from "./lib/socket";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Reservation from "./pages/reservation/Reservation";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Dashboard from "./pages/admin/Dashboard";
import Success from "./pages/reservation/Success";
import CheckoutPage from "./pages/reservation/Checkout";
import AdminLayout from "./layouts/AdminLayout";
import Reservations from "./pages/admin/Reservations";
import Intelligence from "./pages/admin/Intelligence";
import Transaction from "./pages/admin/Transactions";
import Settings from "./pages/admin/Settings";
import SuperAdminLayout from "./layouts/SuperAdminLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import Executive from "./pages/super-admin/Executive";

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
          {/* Customer side */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            {/* Auth */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* Services */}
            <Route path="/book" element={<Reservation />} />
            <Route path="/checkout-page" element={<CheckoutPage />} />
            {/* Response */}
            <Route path="/success" element={<Success />} />
          </Route>
          {/* Admin */}
          <Route
            element={<ProtectedRoute allowedRoles={["ADMIN", "SUPER_ADMIN"]} />}
          >
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/admin/reservations" element={<Reservations />} />
              <Route path="/admin/intelligence" element={<Intelligence />} />
              <Route path="/admin/transactions" element={<Transaction />} />
              <Route path="/admin/settings" element={<Settings />} />
            </Route>
          </Route>
          {/* Super Admin */}
          <Route element={<ProtectedRoute allowedRoles={["SUPER_ADMIN"]} />}>
            <Route path="/super-admin" element={<SuperAdminLayout />}>
              <Route index element={<Executive />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
