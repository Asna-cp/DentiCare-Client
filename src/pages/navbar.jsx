import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Grid, Radio } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  p: 4,
  maxHeight: "600px",
};

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [ModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const Booking = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //GET USER DATAILS FROM LOCAL STORAGE
  const user = localStorage.getItem("user");

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  //LOGOUT

  let logout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  let login = () => {
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "grey" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to={"/"}>DentiCare</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color=""
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={Booking}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Link to="/appointment">
                  <Typography textAlign="center">Appointment</Typography>
                </Link>
                <Link to="/doctors">
                  <Typography textAlign="center">Doctors</Typography>
                </Link>
                <Link to="">
                  <Typography textAlign="center">Treatments</Typography>
                </Link>
                <Link to="">
                  <Typography textAlign="center">Contact</Typography>
                </Link>
                <Link to="/profile">
                  <Typography textAlign="center">Profile</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DentiCare
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/appointment">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Appointment
              </Button>
            </Link>
            <Link to="/doctors">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Doctors
              </Button>
            </Link>
            <Link to="/treatments">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Treatments
              </Button>
            </Link>
            <Link to="/profile">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Profile
              </Button>
            </Link>
          </Box>

          <Box>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={openModal}
            >
              About Us
            </Button>
          </Box>
          <Modal
            open={ModalOpen}
            onClose={closeModal}
            aria-labelledby="send-test-email-modal-title"
            aria-describedby="send-test-email-modal-description"
          >
            <Box sx={style}>
              <IconButton
                aria-label="Close"
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
                onClick={closeModal}
              ></IconButton>

              <Typography
                id="send-test-email-modal-title"
                variant="h6"
                component="h2"
              >
                Dental Medicine
              </Typography>
              <hr style={{ marginTop: "10px" }} />

              <Grid >
                <ul
                  style={{
                    color: "gray",
                    fontSize: "14px",
                    marginLeft: "20px",
                    fontWeight: "lighter",
                  }}
                >
              
                
                  <li>
                    Equipped with state of the art facilities and skilled dental
                    practitioners, the Dental Department of Manipal Hospitals
                    provides complete dental care services from routine dental
                    cleaning to advanced orthodontics to cover all preventative
                    and restorative dental practices.
                  </li>
                </ul>
              </Grid>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: 2,
                  gap: 2,
                }}
              >
                <Button
                  variant="contained"
                  onClick={closeModal}
                  style={{ color: "#fff" }}
                >
                  Cancel
                </Button>
                <Button
                  variant="outlined"
                  onClick={closeModal}
                  style={{ marginRight: "5px", color: "black" }}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </Modal>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <AccountCircleOutlinedIcon
                  sx={{ width: "30px", height: "30px", color: "white" }}
                />
              </IconButton>
            </Tooltip>
            {token ? (
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
                <MenuItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "10rem",
                  }}
                  onClick={handleCloseUserMenu}
                >
                  <Typography sx={{ mb: "5px" }} textAlign="center">
                    {user}
                  </Typography>
                  <Typography
                    sx={{ mt: "5px" }}
                    onClick={logout}
                    textAlign="center"
                  >
                    Log Out
                  </Typography>
                </MenuItem>
              </Menu>
            ) : (
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
                <MenuItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "10rem",
                  }}
                  onClick={handleCloseUserMenu}
                >
                  <Typography
                    sx={{ mt: "5px" }}
                    onClick={login}
                    textAlign="center"
                  >
                    Log In
                  </Typography>
                </MenuItem>
              </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
