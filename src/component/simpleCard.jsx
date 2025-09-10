import { Box, Card, CardContent, Typography, Button } from "@mui/material";

function SimpleCard({ children }) {
  return (
    <Card
      sx={{
        maxWidth: 500,
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mx: "auto",
        my: 4,
        backgroundColor: "transparent",
        border: "1px solid white",
        color: "white",
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default SimpleCard;
