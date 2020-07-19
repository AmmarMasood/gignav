import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  Button
} from "@material-ui/core";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import "../../Style/Navbar.css";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
// navbuttons style
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import IconButton from "@material-ui/core/IconButton";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar style={{ backgroundColor: "white" }}>
          <Toolbar>
            <Typography>
              <img src={require("../../Images/LOGO.png")} alt="" />
            </Typography>
            <div className="Navbar-btns">
              <Button style={{ margin: "5px" }}>Freelancers</Button>
              <Button style={{ margin: "5px" }}>Enterprises</Button>
              <Button style={{ margin: "5px" }}>Field Services</Button>
              <Button
                style={{
                  margin: "5px",
                  color: "#3695EF",
                  borderColor: "#3695EF"
                }}
                variant="outlined"
                color="primary"
                startIcon={<PermIdentityIcon />}
              >
                Log In
              </Button>
              <Button
                style={{ margin: "5px", backgroundColor: "#3695EF" }}
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </div>
            <div className="Navbar-iconbtn">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <MenuRoundedIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Freelancers</MenuItem>
                <MenuItem onClick={handleClose}>Enterprises</MenuItem>
                <MenuItem onClick={handleClose}>Field Services</MenuItem>
                <MenuItem onClick={handleClose}>
                  {" "}
                  <Button
                    style={{
                      margin: "5px",
                      color: "#3695EF",
                      borderColor: "#3695EF"
                    }}
                    variant="outlined"
                    color="primary"
                    startIcon={<PermIdentityIcon />}
                  >
                    Log In
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {" "}
                  <Button
                    style={{
                      margin: "5px",
                      backgroundColor: "#3695EF",
                      padding: "5px 25px 8px 25px"
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Sign Up
                  </Button>
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}

export default Navbar;
