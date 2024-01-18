import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/slices/mealSlice";
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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./detail.scss";

const Detail = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.meal.data);
  const wishlist = useSelector((state) => state.meal.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const detailedELem = data.filter((item) => item._id == id);
  return (
    <>
      <div className="detail">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {detailedELem &&
              detailedELem.map((item) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    key={item._id}
                  >
                    <Card>
                      <CardMedia
                        component="img"
                        sx={{ width: "100%" }}
                        image="https://www.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png"
                        alt="Live from space album cover"
                        style={{
                          //   borderRadius: "50%",
                          height: "500px",
                          marginTop: "20px",
                          padding: "20px",
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
    </>
  );
};

export default Detail;
