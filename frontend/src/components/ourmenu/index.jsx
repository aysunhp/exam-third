import React, { useEffect } from "react";
import "./../ourmenu/ourmenu.scss";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useTheme } from "@mui/material/styles";
import {
  fetchData,
  addWishlist,
  addBasket,
} from "../../redux/slices/mealSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const OurMenu = () => {
  const data = useSelector((state) => state.meal.data);
  const wishlist = useSelector((state) => state.meal.wishlist);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  
  }, []);

  console.log(data);
  console.log(wishlist);
  return (
    <>
      <div className="our-menu-sect">
        <div className="container">
          <span className="menu-intro">OUR MENU</span>
          <h1>Discover Our Exclusive Menu</h1>

          <div className="choose-menu">
            <div className="menu-tpe-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <path
                  d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z"
                  fill="#AEAEB3"
                />
              </svg>
              Main
            </div>
            <div className="menu-tpe-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
              >
                <path
                  d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
                  fill="#AEAEB3"
                />
              </svg>
              Dessert
            </div>
            <div className="menu-tpe-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="10"
                viewBox="0 0 320 512"
              >
                <path
                  d="M64 0C47.4 0 33.5 12.8 32.1 29.3l-14 168.4c-6 72 42.5 135.2 109.9 150.6V448H80c-17.7 0-32 14.3-32 32s14.3 32 32 32h80 80c17.7 0 32-14.3 32-32s-14.3-32-32-32H192V348.4c67.4-15.4 115.9-78.6 109.9-150.6l-14-168.4C286.5 12.8 272.6 0 256 0H64zM81.9 203.1L93.4 64H226.6l11.6 139.1C242 248.8 205.9 288 160 288s-82-39.2-78.1-84.9z"
                  fill="#AEAEB3"
                />
              </svg>
              Drinks
            </div>
          </div>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              {data &&
                data.map((item) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={6}
                      xl={6}
                      key={item._id}
                    >
                      <Card sx={{ display: "flex" }}>
                        <CardMedia
                          component="img"
                          sx={{ width: 60 }}
                          image="https://www.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png"
                          alt="Live from space album cover"
                          style={{
                            borderRadius: "50%",
                            height: "60px",
                            marginTop: "20px",
                          }}
                        />
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <CardContent sx={{ flex: "1 0 auto" }}>
                            <Typography component="div" variant="h6">
                              {item.name}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                            >
                              {item.ingredients}
                            </Typography>
                          </CardContent>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <CardContent sx={{ flex: "1 0 auto" }}>
                            <Typography component="div" variant="h4">
                              ${item.price}
                            </Typography>
                            <Grid container>
                              <Grid item xs={6}>
                                <Typography
                                  component="div"
                                  variant="h4"
                                  onClick={() => {
                                    dispatch(addWishlist(item));
                                  }}
                                >
                                  {wishlist.find(
                                    (elem) => elem._id == item._id
                                  ) ? (
                                    <FavoriteIcon />
                                  ) : (
                                    <FavoriteBorderIcon />
                                  )}
                                </Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography component="div" variant="h4">
                                  <ShoppingBasketIcon
                                    onClick={() => {
                                      dispatch(addBasket(item));
                                    }}
                                  />
                                </Typography>
                              </Grid>
                            </Grid>
                            <Link to={"/" + item._id}>
                              <Button>View</Button>
                            </Link>
                          </CardContent>
                        </Box>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default OurMenu;
