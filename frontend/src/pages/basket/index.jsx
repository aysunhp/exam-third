import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import {
  fetchData,
  deleteBasket,
  increaseBasket,
  decreaseBasket,
} from "../../redux/slices/mealSlice";
import { useDispatch, useSelector } from "react-redux";
import "./basket.scss";
import { Helmet } from "react-helmet";
const Basket = () => {
  const basket = useSelector((state) => state.meal.basket);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  console.log(basket);
  return (
    <>
      <div className="basket">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Basket</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <div className="container">
          <h1>Basket</h1>

          <Box sx={{ flexGrow: 1 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Ingredients</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Type</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Increase</TableCell>
                    <TableCell align="right">Decrease</TableCell>
                    <TableCell align="right">Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {basket &&
                    basket.map((row) => (
                      <TableRow
                        key={row._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.ingredients}</TableCell>
                        <TableCell align="right">
                          {Number(row.price) * row.quantity}
                        </TableCell>
                        <TableCell align="right">{row.type}</TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                        <TableCell align="right">
                          <Button
                            variant="outlined"
                            color="error"
                            onClick={() => {
                              dispatch(increaseBasket(row));
                            }}
                          >
                            Increase
                          </Button>
                        </TableCell>
                        <TableCell align="right">
                          <Button
                            variant="outlined"
                            color="error"
                            onClick={() => {
                              dispatch(decreaseBasket(row));
                            }}
                          >
                            Decrese
                          </Button>
                        </TableCell>
                        <TableCell align="right">
                          <Button
                            variant="outlined"
                            color="error"
                            onClick={() => {
                              dispatch(deleteBasket(row._id));
                            }}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Basket;
