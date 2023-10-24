import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "./Header";
import { Link } from "react-router-dom";
import { AppBar, CssBaseline, Toolbar } from "@mui/material";

function Add() {
  const [poemData, setPoemData] = useState({
    poemName: "",
    poet: "",
    poemLine: "",
    year: "",
    metaphoricalTerm: "",
    sourceDomain: "",
    targetDomain: "",
    interpretation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPoemData({ ...poemData, [name]: value });
  };

  const handleAdd = () => {
    // Handle the submission of the form data (e.g., API call, data storage, etc.).
    console.log("Poem Data:", poemData);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar className="appBar">
        <Toolbar>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/add" color="inherit">
            Add
          </Button>
          <Button component={Link} to="/search" color="inherit">
            About
          </Button>
        </Toolbar>
      </AppBar>
      
      <TextField
        name="poemName"
        label="Poem Name"
        variant="outlined"
        value={poemData.poemName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        name="poet"
        label="Poet"
        variant="outlined"
        value={poemData.poet}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        name="year"
        label="Year"
        variant="outlined"
        value={poemData.year}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        name="poemLine"
        label="Poem Line"
        variant="outlined"
        value={poemData.poemLine}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        name="metaphoricalTerm"
        label="Metaphorical Term"
        variant="outlined"
        value={poemData.metaphoricalTerm}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        name="sourceDomain"
        label="Source Domain"
        variant="outlined"
        value={poemData.sourceDomain}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        name="targetDomain"
        label="Target Domain"
        variant="outlined"
        value={poemData.targetDomain}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        name="interpretation"
        label="Interpretation"
        variant="outlined"
        value={poemData.interpretation}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      {/* Add all other input fields similarly */}

      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
}

export default Add;
