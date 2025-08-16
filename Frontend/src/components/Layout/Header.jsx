import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { getHeaderStyles } from "./styles";

const LayoutHeader = ({ logout, user }) => {
  const { REACT_APP_BASE_URL } = process.env;

  const classes = getHeaderStyles();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = [
    { name: "Marks", path: "/marks" },
    { name: "Products", path: "/products" },
  ];

  return (
    <AppBar position="static" sx={classes.wrapper}>
      <Container maxWidth="xl">
        <Box className="navbar">
          <Box className="menuItems">
            {pages.map((page, i) => (
              <Link key={i} to={page.path}>
                {page.name}
              </Link>
            ))}
          </Box>
          <Box>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt={user?.username}
                src={`${REACT_APP_BASE_URL}/${user?.image}`}
              />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={logout()}>
                <Typography sx={{ textAlign: "center" }}>Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default observer(LayoutHeader);
