import React from "react";
import { Button } from "@mui/material";

function PrimaryButton({ label, onClick }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        textTransform: "uppercase",
        padding: "8px 12px",
        border: "1px solid white",
        color: "white",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: "1px solid white",
        },
      }}
    >
      {label}
    </Button>
  );
}

export default PrimaryButton;
