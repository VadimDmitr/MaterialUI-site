import React from "react";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              marginRight: 1, // theme.spacing(1)
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
            }}
          >
            Web Developer Blog
          </Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">
              {" "}
              Log In{" "}
            </Button>
          </Box>
          <Button color="secondary" variant="contained">
            {" "}
            Log Out{" "}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;
