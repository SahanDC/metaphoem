import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import React from "react";

interface PoemData {
  poem_name: string;
  poet: string;
  year: number;
  poem_line: string;
  metaphor_count: string
  metaphorical_term: string;
  source_domain: string;
  target_domain: string;
  interpretation: string;
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
            <TableCell align="right">Poem Line</TableCell>
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
              <TableCell align="right">{row.poem_line}</TableCell>
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

export default SearchTable;
