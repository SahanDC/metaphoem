import { Link, useAsyncError } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CssBaseline, Paper, TextField } from "@mui/material";
// import Header from './Header';
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

const tableData = [
  {
    poem_name: "Poem 1",
    poet: "Poet 1",
    poemLine: "Line 1",
    year: "2022",
    metaphorical_term: "Term 1",
    source_domain: "Source 1",
    target_domain: "Target 1",
    interpretation: "Interpretation 1",
  },
  // Add more data as needed
];

interface PoemData {
  poem_name: string;
  poet: string;
  year: number;
  metaphorical_term: string;
  source_domain: string;
  target_domain: string;
  interpretation: string;
}

function Search() {
  const [poem_name, set_poem_name] = useState('');
  const [source_domain, set_source_domain] = useState('');
  const [target_domain, set_target_domain] = useState('');

  const handleSearch = () => {
    console.log('Searching with the following values:');
    console.log('Poem Name:', poem_name);
    console.log('Source Domain:', source_domain);
    console.log('Target Domain:', target_domain);
  };

  return (
    <div>
      <div className='search'>
        <div className="searchInputs">

        </div>
        <div className="dataResults">

        </div>
      </div>
      <TextField
        label="Poem Name"
        variant="outlined"
        value={poem_name}
        onChange={(e) => set_poem_name(e.target.value)}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Source Domain"
        variant="outlined"
        value={source_domain}
        onChange={(e) => set_source_domain(e.target.value)}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Target Domain"
        variant="outlined"
        value={target_domain}
        onChange={(e) => set_target_domain(e.target.value)}
        fullWidth
        margin="normal"
      />

      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}

function SearchTable({ dataJson }: { dataJson: PoemData[] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Poem Name</TableCell>
            <TableCell align="right">Poet</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Metaphorical Term</TableCell>
            <TableCell align="right">Source Domain</TableCell>
            <TableCell align="right">Target Domain</TableCell>
            <TableCell align="right">Interpretation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataJson.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.poem_name}</TableCell>
              <TableCell align="right">{row.poet}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="right">{row.metaphorical_term}</TableCell>
              <TableCell align="right">{row.source_domain}</TableCell>
              <TableCell align="right">{row.target_domain}</TableCell>
              <TableCell align="right">{row.interpretation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function Home() {
  const [data_file, set_data_file] = useState([]);
  const [poem_name, set_poem_name] = useState("");
  const [source_domain, set_source_domain] = useState("");
  const [target_domain, set_target_domain] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/getAllQueries")
      .then((response) => response.json())
      .then((data) => {
        set_data_file(data.map((item: any) => item._source));
        console.log(data);
      })
      .catch((error) => console.log("Error in Get ALl Queries:", error));
  }, []);

  return (
    <div>
      <NavBar />
      <Search />

      <Container>
       <SearchTable dataJson={data_file} />
      </Container>
    </div>
  );
}

export default Home;
