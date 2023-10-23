import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Search() {
  const [poemName, setPoemName] = useState('');
  const [sourceDomain, setSourceDomain] = useState('');
  const [targetDomain, setTargetDomain] = useState('');

  const handleSearch = () => {
    // Implement your search logic here using the values of poemName, sourceDomain, and targetDomain.
    // You can use these values to perform a search operation, such as an API call or filtering data.

    console.log('Searching with the following values:');
    console.log('Poem Name:', poemName);
    console.log('Source Domain:', sourceDomain);
    console.log('Target Domain:', targetDomain);
  };

  return (
    <div>
      <TextField
        label="Poem Name"
        variant="outlined"
        value={poemName}
        onChange={(e) => setPoemName(e.target.value)}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Source Domain"
        variant="outlined"
        value={sourceDomain}
        onChange={(e) => setSourceDomain(e.target.value)}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Target Domain"
        variant="outlined"
        value={targetDomain}
        onChange={(e) => setTargetDomain(e.target.value)}
        fullWidth
        margin="normal"
      />

      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}

export default Search;
