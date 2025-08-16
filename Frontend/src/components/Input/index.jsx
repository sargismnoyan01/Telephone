import { useState } from "react";
import get from "lodash/get";

import { TextField, InputAdornment, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import getStyles from "./styles";

export const Input = ({
  isSearch,
  isNumber,
  isPassword,
  topLabel,
  wrapperStyles,
  ...props
}) => {
  const classes = getStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => setShowPassword(!showPassword);
  const type = () => {
    if (isPassword) {
      return showPassword ? "text" : "password";
    } else if (isNumber) {
      return "number";
    }
    return "text";
  };
  return (
    <Box sx={{ width: "100%", ...wrapperStyles }}>
      {topLabel && (
        <Typography sx={classes.topLabel} variant="h6">
          {topLabel}
        </Typography>
      )}
      <TextField
        type={type()}
        sx={{ ...props.sx }}
        InputProps={{
          startAdornment: isSearch && (
            <InputAdornment position="start">
              <SearchIcon sx={{ width: "2rem", height: "2rem" }} />
            </InputAdornment>
          ),
          endAdornment: isPassword && (
            <InputAdornment position="end">
              {showPassword ? (
                <VisibilityIcon
                  sx={{
                    cursor: "pointer",
                    width: "2rem",
                    height: "2rem",
                    color: "#fff",
                  }}
                  onClick={handlePassword}
                />
              ) : (
                <VisibilityOffIcon
                  sx={{
                    cursor: "pointer",
                    width: "2rem",
                    height: "2rem",
                    color: "#fff",
                  }}
                  onClick={handlePassword}
                />
              )}
            </InputAdornment>
          ),
        }}
        {...props}
      />
    </Box>
  );
};

export const FormInput = ({ form, field, externalError = null, ...props }) => {
  const { touched, errors } = form;
  const classes = getStyles();
  const hasError =
    externalError === null
      ? Boolean(get(touched, field?.name) && get(errors, field?.name))
      : Boolean(externalError);
  const helperText = hasError ? get(errors, field?.name) : undefined;
  return (
    <Input
      sx={{ ...props.sx }}
      {...field}
      {...props}
      helperText={helperText}
      error={hasError}
      FormHelperTextProps={{ sx: classes.helperText }}
    />
  );
};
