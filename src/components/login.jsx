import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { signIn, signUp } from "../services/auth";

const defaultTheme = createTheme();

export const Login = () => {
  const [isExistingUser, setIsExistingUser] = useState(true);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.authState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    dispatch(
      isExistingUser ? signIn({ email, password }) : signUp({ email, password })
    );
    // resetForm();
    //   setIsExistingUser(true);
    //   setSnackbar({ open: true, text: error, variant: "error" });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isExistingUser ? "Sign In" : "Sign Up"}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {isExistingUser ? "Sign in" : "Sign up"}
            </Button>
            <Grid container>
              <Grid item>
                <RouterLink onClick={() => setIsExistingUser((prev) => !prev)}>
                  {isExistingUser
                    ? "Don't have an account? Sign Up"
                    : "Already have an account? Sign In"}
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      {/* <Snackbar
        open={!!error}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert severity="error">{error}</Alert>
      </Snackbar> */}
    </ThemeProvider>
  );
};
