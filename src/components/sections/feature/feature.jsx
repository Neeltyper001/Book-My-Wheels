import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Feature = () => {
  return (
    <section>
      <Box
        sx={{
          display: "flex",
          height: "500px",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
            position: "absolute",
            left: "0%",
            opacity: "0.5",
            zIndex: "2",
            backgroundColor: "gray",
          }}
        >
          <Typography
            sx={{
              typography: {
                md: "h3",
              },
            }}
          >
            Why Choose Us ?
          </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias
            autem minima laborum odit molestiae, voluptates rerum? Reiciendis,
            vero quod?
          </Typography>
        </Box>

        <Box sx={{ position: "relative", width: "30%", height: "500px" }}>
          <Box
            sx={{
              position: "absolute",
            }}
          >
            <img
              src="/images/feature-1.png"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Feature;
