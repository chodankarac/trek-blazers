import { Button } from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import { response } from "@/jsonFiles/TourismCards";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";

const UpcomingEvents = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button size="large" variant="contained">
          <Typography variant="h6">Upcoming Event</Typography>
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            minWidth: 275,
            gap: 5,
            paddingTop: 1,
          }}
        >
          {response.result.map((value, index) => (
            <Card key={index}>
              <CardMedia
                sx={{ height: 180, width: 500 }}
                image={`/assets/images/homepage/${value.image}.jpg`}
                title="blue water hiking"
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  {value.touristPlace}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Grade:{value.grade}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Trek Fee:{value.fee}
                </Typography>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{ borderRadius: "3rem", maxWidth: "10rem" }}
                >
                  More Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default UpcomingEvents;
