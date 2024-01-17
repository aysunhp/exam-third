import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./../ourChef/ourChef.scss";
const OurChef = () => {
  return (
    <>
      <div className="our-chef-sect">
        <div className="container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className="img-sect">
                  <div className="img"></div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className="chef-content">
                  <span>ABOUT TASTY</span>
                  <h1>Our chef cooks the most delicious food for you</h1>
                  <p style={{ fontSize: "21px " }}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <p style={{ fontSize: "21px " }}>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default OurChef;
