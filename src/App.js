import React from "react";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
  Paper,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

function App() {
  const theme = useTheme();
  return (
    <>
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

      <main>
        <Box mt={8}>
          <Paper /*mainFeaturesPost*/
            sx={{
              backgroundImage: `url('https://source.unsplash.com/featured')`,
              position: "relative",
              color: theme.palette.common.white,
              marginBottom: theme.spacing(8),
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Container fixed>
              <div
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                  background: "rgba(0,0,0, .9)",
                }}
              />
              <Grid container>
                <Grid item md={6}>
                  <div
                    sx={{
                      position: "relative",
                      padding: theme.spacing(3),
                    }}
                  >
                    <div /*mainFeaturesPostContent*/
                      sx={{
                        position: "relative",
                        padding: theme.spacing(3),
                      }}
                    >
                      <Typography
                        component="h1"
                        variant="h3"
                        color="inherit"
                        gutterBottom
                        sx={{
                          marginTop: theme.spacing(4),
                        }}
                      >
                        Web Developer
                      </Typography>
                      <Typography component="h5" color="inherit" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut ullamcorper ut sem nec faucibus. Sed auctor augue et
                        neque commodo, a feugiat nisl fringilla. Phasellus quis
                        elit metus.
                      </Typography>
                    </div>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{
                        marginBottom: theme.spacing(6),
                      }}
                    >
                      Learn more
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </Box>
      </main>
    </>
  );
}

export default App;
