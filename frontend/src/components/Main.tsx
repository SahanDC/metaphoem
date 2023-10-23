import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Theme, makeStyles } from '@mui/material/styles';

const tableData = [
  {
    poemName: 'Poem 1',
    poet: 'Poet 1',
    poemLine: 'Line 1',
    year: '2022',
    metaphoricalTerm: 'Term 1',
    sourceDomain: 'Source 1',
    targetDomain: 'Target 1',
    interpretation: 'Interpretation 1',
  },
  // Add more data as needed
];

function HomePage() {

  return (
    <div>
      <AppBar className="appBar">
        <Toolbar>
          <Typography variant="h6" style={{ flex: 1 }}>
            Home
          </Typography>
          <Button component={Link} to="/search" color="inherit">
            Search
          </Button>
          <Button component={Link} to="/add" color="inherit">
            Add
          </Button>
        </Toolbar>
      </AppBar>

      <Container>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Poem Name</TableCell>
                <TableCell>Poet</TableCell>
                <TableCell>Poem Line</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Metaphorical Term</TableCell>
                <TableCell>Source Domain</TableCell>
                <TableCell>Target Domain</TableCell>
                <TableCell>Interpretation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.poemName}</TableCell>
                  <TableCell>{row.poet}</TableCell>
                  <TableCell>{row.poemLine}</TableCell>
                  <TableCell>{row.year}</TableCell>
                  <TableCell>{row.metaphoricalTerm}</TableCell>
                  <TableCell>{row.sourceDomain}</TableCell>
                  <TableCell>{row.targetDomain}</TableCell>
                  <TableCell>{row.interpretation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default HomePage;
