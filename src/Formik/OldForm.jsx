import { Box, TextField, Stack, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = { name: "", email: "", channel: "" };
const onSubmit = (values) => {
  console.log(values);
};
// Validate Form with Formik and Regexp only
// const validate = (values) => {
//   // Formik validate must return Object (eg.errors object)

//   let errors = {};

//   if (!values.name) {
//     errors.name = "Required";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email format";
//   }
//   if (!values.channel) {
//     errors.channel = "Required";
//   }
//   return errors;
// };

// <FormControl>
// <InputLabel variant="outlined" htmlFor="name">
//   Name
// </InputLabel>
// <Field
//   as={OutlinedInput}
//   label="name"
//   type="text"
//   id="name"
//   name="name"
// />

// <ErrorMessage name="name" component={FormHelperText} />
// </FormControl>

// <FormControl variant="outlined">
// <InputLabel htmlFor="email" variant="outlined">
//   Email
// </InputLabel>
// <Field
//   as={OutlinedInput}
//   label="email"
//   type="email"
//   id="email"
//   name="email"
// />

// <ErrorMessage name="email" component={FormHelperText} />
// </FormControl>

// <FormControl>
// <InputLabel htmlFor="channel" variant="outlined">
//   Channel
// </InputLabel>
// <Field
//   as={OutlinedInput}
//   label="channel"
//   type="text"
//   id="channel"
//   name="channel"
//   placeholder="YouTube channel name"
// />

// <ErrorMessage name="channel" component={FormHelperText} />
// </FormControl>

// Validate with Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid Email Format").required("Required!"),
  channel: Yup.string().required("Required!"),
});

const OldForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  });
  console.log(formik.touched.name);

  return (
    <Box
      onSubmit={formik.handleSubmit}
      component="form"
      sx={{
        margin: "0 auto",
        backgroundColor: "#fff",
        padding: "30px 20px",
        borderRadius: "10px",
        width: "500px",
        minHeight: "500px",
      }}
    >
      <Typography sx={{ marginBottom: "40px" }} variant="h4">
        Register
      </Typography>

      <Stack
        gap={4}
        direction="column"
        sx={{ "& .MuiFormHelperText-root": { color: "red" } }}
      >
        <TextField
          name="name"
          id="name"
          label="Name"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          helperText={
            formik.errors.name && formik.touched.name
              ? formik.errors.name
              : null
          }
          error={formik.errors.name && formik.touched.name ? true : false}
        />
        <TextField
          type="email"
          name="email"
          id="id"
          label="Email"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          helperText={
            formik.errors.email && formik.touched.email
              ? formik.errors.email
              : null
          }
          error={formik.errors.email && formik.touched.email ? true : false}
        />
        <TextField
          name="channel"
          id="channel"
          label="Channel"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
          helperText={
            formik.errors.channel && formik.touched.channel
              ? formik.errors.channel
              : null
          }
          error={formik.errors.channel && formik.touched.channel ? true : false}
        />
      </Stack>
      <Button
        type="submit"
        sx={{ marginTop: "40px", width: "100%", height: "60px" }}
        variant="contained"
      >
        Submit
      </Button>
    </Box>
  );
};

export default OldForm;
