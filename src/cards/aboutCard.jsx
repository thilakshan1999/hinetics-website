import { Card, CardContent, Typography, Button } from "@mui/material";
import SimpleCard from "../component/simpleCard";
import PrimaryButton from "../component/primaryBtn";

function AboutCard({ onClick }) {
  return (
    <SimpleCard>
      <Typography variant="h5" gutterBottom>
        About Us
      </Typography>
      <Typography sx={{ marginBottom: "20px" }}>
        Hinetics Sri Lanka specializes in innovative motor design and advanced
        technological solutions. We blend engineering excellence with creative
        software to deliver impactful technologies for society.
      </Typography>
      <PrimaryButton label={"Close"} onClick={onClick} />
    </SimpleCard>
  );
}

export default AboutCard;
