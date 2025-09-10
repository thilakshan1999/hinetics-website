import { useState } from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import AboutCard from "./cards/aboutCard";
import MainContent from "./content/mainContent";

function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "2rem",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        {!showAbout && <MainContent onClick={() => setShowAbout(true)} />}

        {showAbout && <AboutCard onClick={() => setShowAbout(false)} />}
      </Box>
      {/* Main Content */}

      {/* Footer */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#888",
        }}
      >
        © 2025 Hinetics (Pvt) Ltd. Kilinochchi, Sri Lanka.
      </Typography>
    </Box>
  );
}
export default App;
