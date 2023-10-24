import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Box, Grid, Paper, Stack } from "@mui/material";
import NavBar from "./NavBar";

import "./Home.css"

function Home() {
  return (
    <>
      <NavBar/>
      <main>
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                bgcolor: "background.paper",
                pt: 9,
                pb: 7,
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h3"
                  align="center"
                  color="text.primary"
                  style={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  Metaphoem
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  color="text.primary"
                  paragraph
                >
                  Welcome to Metaphoem, This is dedicated to the art of
                  metaphor. Metaphoem is designed to be a comprehensive resource
                  for poets, scholars, and literary enthusiasts in the
                  Sinhalease community.
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button href="/Search" variant="contained">
                    Search
                  </Button>
                </Stack>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </main>
    </>
  );
}

export default Home;
