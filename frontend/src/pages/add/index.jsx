import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fetchData, deleteData, postData } from "../../redux/slices/mealSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import "./add.scss";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  ingredients: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  type: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  image: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Add = () => {
  const data = useSelector((state) => state.meal.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  console.log(data);

  return (
    <>
      <div className="add">
        <h1>Add New Meal</h1>
        <div className="form">
          <Formik
            initialValues={{
              name: "",
              ingredients: "",
              price: "",
              type: "",
              image: "",
            }}
            // validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
              dispatch(postData(values));
            }}
          >
            {({ errors, touched, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Field name="name" style={{ marginBottom: "20px" }} />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <br />
                <Field name="ingredients" style={{ marginBottom: "20px" }} />
                {errors.ingredients && touched.ingredients ? (
                  <div>{errors.ingredients}</div>
                ) : null}
                <br />
                <Field name="price" style={{ marginBottom: "20px" }} />

                {errors.price && touched.price ? (
                  <div>{errors.price}</div>
                ) : null}
                <br />
                <Field name="type" style={{ marginBottom: "20px" }} />

                {errors.type && touched.type ? <div>{errors.type}</div> : null}
                <br />
                <Field name="image" style={{ marginBottom: "20px" }} />

                {errors.image && touched.image ? (
                  <div>{errors.image}</div>
                ) : null}
                <br />
                <Button
                  variant="outlined"
                  type="submit"
                  style={{ textAlign: "center", margin: "auto" }}
                >
                  Add
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Ingredients</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.ingredients}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.type}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => {
                        dispatch(deleteData(row._id));
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
      </div>
    </>
  );
};

export default Add;
