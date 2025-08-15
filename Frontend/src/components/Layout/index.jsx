import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Box, Container } from "@mui/material";
import AuthStore from "stores/AuthStore";
import LayoutHeader from "./Header";
import { useNavigate } from "react-router-dom";
import { getLayoutStyles } from "./styles";

const Layout = ({ children }) => {
  const classes = getLayoutStyles();

  const { getUser, user, logout } = AuthStore;

  const navigate = useNavigate();
  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogOut = () => {
    logout(navigate);
  };
  return (
    <Box>
      <LayoutHeader logout={() => handleLogOut} user={user} />
      <Box sx={classes.wrapper}>
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};

export default observer(Layout);
