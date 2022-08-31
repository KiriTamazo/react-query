import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Field } from "formik";
import React from "react";

const CusFormField = ({ ...value }) => {
  console.log({ ...value });
  return (
    <FormControl>
      <Field {...value}>
        {({ field, form, meta }) => {
          const { error, touched } = meta;
          return (
            <>
              <InputLabel
                sx={{ textTransform: "capitalize" }}
                color={error && touched ? "error" : null}
                variant="outlined"
                htmlFor={field.name}
              >
                {field.name}
              </InputLabel>
              <OutlinedInput
                error={error && touched && true}
                {...field}
                {...value}
                label={field.name}
              />
              <FormHelperText>
                {touched && error ? <>{error} </> : null}
              </FormHelperText>
            </>
          );
        }}
      </Field>
    </FormControl>
  );
};

export default CusFormField;
