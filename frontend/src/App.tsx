import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ResponsiveAppBar from "./component/header/appBar";
import ImageMasonry from "./component/masonry/masonry";
import Dashboard from "./pages/dashboard/dashboard";
import Box from "@mui/material/Box";
import FloatingActionButtons from "./component/floatActionBtn/floatActionBtn";
import LoginComponent from "./component/loginComponent/loginComponent";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Box sx={{ marginTop: 8 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<ImageMasonry />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </Box>
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 'tooltip', 
        }}
      >
        <FloatingActionButtons />
      </Box>
    </BrowserRouter>
  );
}

export default App;
