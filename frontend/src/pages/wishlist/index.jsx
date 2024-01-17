import React, { useEffect } from "react";
import "./wishlist.scss";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useTheme } from "@mui/material/styles";
import { fetchData, deleteWishlist } from "../../redux/slices/mealSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.meal.wishlist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  console.log(wishlist);
  return (
    <>
      <div className="our-menu-sect">
        <div className="container">
          <h1>Wishlist</h1>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              {wishlist &&
                wishlist.map((item) => {
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
                                    dispatch(deleteWishlist(item));
                                  }}
                                >
                                  <FavoriteIcon />
                                </Typography>
                              </Grid>
                              <Grid item xs={6}>
                                {" "}
                                <Typography component="div" variant="h4">
                                  <ShoppingBasketIcon />
                                </Typography>
                              </Grid>
                            </Grid>
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

export default Wishlist;
