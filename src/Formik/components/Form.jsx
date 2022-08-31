import { Stack, Typography, Button } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import CusFormField from "./CusFormField";
import "./Form.css";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comment: "",
  address: "",
};
const onSubmit = (values) => {
  console.log("click", values);
};

// Validate with Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid Email Format").required("Required!"),
  channel: Yup.string().required("Required!"),
  comment: Yup.string().required("Required!"),
  address: Yup.string().required("Required!"),
});

const Forms = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="form">
        <Typography sx={{ marginBottom: "40px" }} variant="h4">
          Register
        </Typography>
        <Stack
          gap={4}
          direction="column"
          sx={{ "& .MuiFormHelperText-root": { color: "red" } }}
        >
          <CusFormField type="text" id="name" name="name" />
          <CusFormField id="email" name="email" />
          <CusFormField id="channel" name="channel" />
          <CusFormField multiline rows="3" id="comment" name="comment" />
          <CusFormField multiline rows="2" id="address" name="address" />
        </Stack>

        <Button type="submit" className="btn" variant="contained">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default Forms;
