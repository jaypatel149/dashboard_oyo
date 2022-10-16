import React from "react";
import Logo from "../../src/assets/OYO.png";
import { Container, Divider, Grid, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PaidIcon from "@mui/icons-material/Paid";
import SettingsIcon from "@mui/icons-material/Settings";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import Profile from "../../src/assets/download.jpeg";
import InputBase from "@mui/material/InputBase";
import CardComponet from "./CardComponet";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.9),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: ` ${theme.palette}`,
    padding: "0 5px",
  },
}));

const Dashboard = () => {
  return (
    <Container maxWidth='xl'>
      <Grid container sx={{display:'flex',justifyContent:'center'}}>
        <Grid
          item
          xs={3}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              backgroundColor: "#780acc",
            },
          }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{ width: "5rem", marginLeft: "10px" }}
          />
          <Box>
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem sx={{ marginBottom: "1rem" }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <MenuIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: "white" }} primary="Hide Menu" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon sx={{ color: "#a290de" }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: "white" }} primary="DashBoard" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <ShoppingBagIcon sx={{ color: "#a290de" }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: "white" }} primary="Projects" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <PaidIcon sx={{ color: "#a290de" }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: "white" }} primary="Earnings" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <SettingsIcon sx={{ color: "#a290de" }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: "white" }} primary="Profile" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Typography sx={{ marginLeft: "2rem", color: "white" }}>
                Support
              </Typography>
              ;
              <List>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <ConfirmationNumberIcon sx={{ color: "#f0afe2" }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: "white" }} primary="Tickets" />
                    <IconButton aria-label="cart" sx={{ marginRight: "5rem" }}>
                      <StyledBadge
                        badgeContent={5}
                        color="success"
                      ></StyledBadge>
                    </IconButton>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Grid>
        <Grid item xs={9} sx={{ backgroundColor: "#f5faf9"}}>
          <Container>
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Dashboard
              </Typography>
              <Box sx={{ marginLeft: "auto" }}>
                <IconButton sx={{ p: 0 }}>
                  <Typography
                    sx={{
                      marginRight: "1rem",
                      color: "black",
                      fontWeight: "700",
                    }}
                  >
                    Maylisamy
                  </Typography>
                  <Avatar alt="Profile" src={Profile} />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
          <Container>
            <Toolbar disableGutters>
              <Typography
                sx={{ fontSize: "1rem", fontWeight: "bold", color: "#b5227d",display:{xs:'none',sm:'none',md:'block'}}}
              >
                My Projects (13)
              </Typography>
              <Box sx={{ marginLeft: "3rem" }}>
                <IconButton>
                  <Typography sx={{ marginRight: "1rem", color: "black",display:{xs:'none',sm:'none',md:'block'} }}>
                    Explore
                  </Typography>
                </IconButton>
              </Box>
              <Search sx={{ marginLeft: "auto" ,display:{xs:'none',sm:'none',md:'block'}}}>
                <SearchIconWrapper sx={{ marginLeft: "auto" }}>
                  <SearchIcon sx={{ marginLeft: "auto" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  sx={{ marginLeft: "auto" }}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Toolbar>
            <Divider />
            <CardComponet />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
