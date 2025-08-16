import { Toaster, resolveValue, toast } from "react-hot-toast";

import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import WarningIcon from "@mui/icons-material/Warning";

import getStyles from "./style";

const Notification = () => {
  return (
    <Toaster position="top-right" toastOptions={{ duration: 3500 }}>
      {(t) => {
        if (
          t?.message?.props?.children?.key &&
          t?.message?.props?.children?.key === "401" &&
          localStorage.getItem("access_token")
        ) {
          return;
        }
        const classes = getStyles(t);
        return (
          <Box sx={classes.wrapper}>
            <Box sx={classes.content}>
              {t.type === "success" ? (
                <CheckCircleIcon sx={classes.icon} />
              ) : (
                <WarningIcon sx={classes.icon} />
              )}
              <p>
                {t.type === "success" ? "Success alert" : "Warning alert"}
                :&nbsp;
              </p>
              <span>{resolveValue(t.message, t)}</span>
            </Box>
            <CloseIcon
              onClick={() => toast.dismiss(t.id)}
              sx={classes.crossIcon}
            />
          </Box>
        );
      }}
    </Toaster>
  );
};

export default Notification;
