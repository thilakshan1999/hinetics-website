import { Box, Typography, Button } from "@mui/material";
import hinecticsLogo from "../assets/logo.svg";
import PrimaryButton from "../component/primaryBtn";

function MainContent({ onClick }) {
  return (
    <>
      <Box
        component="img"
        src={hinecticsLogo}
        alt="Hinetics Logo"
        sx={{
          height: "7em",
          p: 2,
        }}
      />

      <Typography
        variant="h3"
        gutterBottom
        sx={{ textTransform: "uppercase", fontSize: "1.8rem" }}
      >
        HINETICS
      </Typography>

      <Typography
        sx={{
          textTransform: "uppercase",
          marginBottom: "10px",
          fontSize: "0.8rem",
        }}
      >
        PIONEERING INNOVATIVE MOTOR DESIGN.
      </Typography>
      <Typography
        sx={{
          mb: 2,
          textTransform: "uppercase",
          fontSize: "0.8rem",
          marginBottom: "40px",
        }}
      >
        ENGINEERING EXCELLENCE AND SOFTWARE CREATIVITY TO DRIVE INNOVATION
      </Typography>

      <PrimaryButton label={"About Us"} onClick={onClick} />
    </>
  );
}

export default MainContent;
