import { Link } from "react-router-dom";
import { Field, Formik } from "formik";

import { FormInput } from "components/Input";
import bgImg from "assets/images/phone_bg.jpeg";
import { Box, Button, Container, Typography } from "@mui/material";
import { getStyles } from "./styles";

const AuthLayout = ({
  title,
  linkText,
  linkTo,
  initialValues,
  validationSchema,
  onSubmit,
  fields,
}) => {
  const classes = getStyles(bgImg);
  return (
    <Box sx={classes.wrapper}>
      <Container sx={classes.container}>
        <Box sx={classes.content}>
          <Box sx={classes.contentHeader}>
            <Typography variant="h1">{title}</Typography>
            <Link to={linkTo}>{linkText}</Link>
          </Box>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, handleSubmit, isValid }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={classes.formContent}>
                  {fields.map(({ name, placeholder, isPassword, ...rest }) => (
                    <Field
                      key={name}
                      sx={classes.inputField}
                      component={FormInput}
                      placeholder={placeholder}
                      name={name}
                      isPassword={isPassword}
                      helperText={errors[name]}
                      error={!!errors[name]}
                      {...rest}
                    />
                  ))}
                  <Button disabled={!isValid} type="submit">
                    {title}
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Container>
    </Box>
  );
};

export default AuthLayout;
