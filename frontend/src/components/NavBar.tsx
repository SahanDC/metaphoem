import { AppBar, Button, CssBaseline, Stack, Toolbar, Typography } from "@mui/material";

function NavBar() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Metaphoem
          </Typography>
          <Stack direction={'row'} spacing={2}>
            <Button color="inherit" href="/">
                Home
            </Button>
            <Button color="inherit" href="/Search">
                Search
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
