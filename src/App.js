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
  Card,
  CardMedia,
  CardContent,
  CardActions,
  BottomNavigation,
  BottomNavigationAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from "@mui/icons-material/Home";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useTheme } from "@mui/material/styles";
import LayerIcon from "@mui/icons-material/Layers";
import PlayCircleFilled from "@mui/icons-material/PlayCircleFilled";

const cards = [1, 2, 3, 4, 5, 6];

function App() {
  const theme = useTheme();
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              <Button
                color="inherit"
                variant="outlined"
                onClick={handleClickOpen}
              >
                {" "}
                Log In{" "}
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Log In</DialogTitle>
                <DialogContent>
                  <DialogContentText> Log In to See Videos </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="email adress"
                    label="Email Adress"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Log In
                  </Button>
                </DialogActions>
              </Dialog>
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
          <Paper /*className="mainFeaturesPost"*/
            sx={{
              backgroundImage: `url('https://picsum.photos/1200/800')`,
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
                    <div /*className="mainFeaturesPostContent"*/
                      sx={{
                        position: "relative",
                        padding: theme.spacing(6),
                      }}
                    >
                      <Typography
                        component="h1"
                        variant="h3"
                        color="inherit"
                        gutterBottom
                        sx={{
                          marginTop: theme.spacing(8),
                        }}
                      >
                        Web Developer Blog
                      </Typography>
                      <Typography
                        component="h5"
                        variant="h6"
                        color="inherit"
                        gutterBottom
                        paragraph
                      >
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
                        marginBottom: theme.spacing(8),
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
        <div /*className="mainContent"*/>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Web Developer Blog
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              ullamcorper ut sem nec faucibus. Sed auctor augue et neque
              commodo, a feugiat nisl fringilla. Phasellus quis elit metus.
            </Typography>
            <div /*className="mainButtons"*/>
              <Grid
                /*className="mainButtons"*/ container
                spacing={5}
                justifyContent="center"
              >
                <Grid item>
                  <Button variant="contained" color="primary">
                    Start Now
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container
          /* className="cardGrid"*/ maxWidth="md"
          sx={{
            marginTop: theme.spacing(4),
          }}
        >
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card /*className="card"*/
                  sx={{
                    backgroundColor: "#e9e9e9", // Set to the color of background
                    borderRadius: "15px", // Set preference
                    boxShadow:
                      "20px 20px 60px #bebebe, -20px -20px 90px #ffffff",
                    border: "1px solid #000000",
                  }}
                >
                  <CardMedia /*class="cardMedia"*/
                    image="https://picsum.photos/1200/800"
                    title="Image title"
                    sx={{
                      paddingTop: "56.25%",
                    }}
                  />
                </Card>
                <CardContent /*className="cardContent"*/
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    Blog Post
                  </Typography>
                  <Typography>
                    Blog Post. Web Developer blog. Web Developer blog. Blog
                    Post.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <LayerIcon />
                  <PlayCircleFilled />
                </CardActions>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{
            paddingTop: "2.50%",
          }}
        >
          Imagined and Realized by Vadim D.
        </Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          /*className={classes.root}*/
          sx={{
            paddingTop: ".30%",
          }}
        >
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon />}
          />

          <BottomNavigationAction
            label="Favorites"
            value="favories"
            icon={<FavoriteIcon />}
          />

          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />

          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
        <Typography
          align="center"
          color="textSecondary"
          component="p"
          variant="subtitle1"
          sx={{
            paddingTop: "0.60%",
          }}
        >
          Web Developer Blog React js Material UI site
        </Typography>
      </footer>
    </>
  );
}

export default App;
