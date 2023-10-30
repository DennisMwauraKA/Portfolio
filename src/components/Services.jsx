import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function Services() {
  return (
    <section>
      <div className="">
        <h1 className="text-white text-center text-30px">Services</h1>
      </div>
      <div className="flex gap-5 px-5 w-full ">
        <Card sx={{ maxWidth: 450, backgroundColor: "primary.light" }}>
          <CardContent>
            <CardHeader title="Mobile Application Development"></CardHeader>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            ></Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 450, backgroundColor: "primary.light" }}>
          <CardContent>
            <CardHeader title="Web Application Development"></CardHeader>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            ></Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 450, backgroundColor: "primary.light" }}>
          <CardContent>
            <CardHeader title="Web Design"></CardHeader>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
            I design websites from  scratch harnessing the power of mobile responsiveness
            I have experience in creating websites form the ground up using the latest technologies
            Why wait contact me and let's get your website up and running
            </Typography>

            
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Services;
