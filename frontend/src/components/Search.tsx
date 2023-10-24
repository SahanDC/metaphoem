import React, { useEffect, useState } from "react";
import { Button, Container, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NavBar from "./NavBar";
import SearchTable from "./SearchTable";

function Search() {
  const [data_file, set_data_file] = useState([]);
  const [poem_name, set_poem_name] = useState("");
  const [source_domain, set_source_domain] = useState("");
  const [target_domain, set_target_domain] = useState("");

  const searchInputs = () => {
    fetch(`http://localhost:3000/searchQuery?poem_name=${poem_name}&source_domain=${source_domain}&target_domain=${target_domain}`).then(
      (response) => response.json()).then(
        (data) => {
          console.log(data)
          set_data_file(data.map((item: any) => item._source));
        }
      ).catch((error) => console.error("Error: ", error))
  };

  useEffect(() => {
    fetch("http://localhost:3000/getAllQueries")
      .then((response) => response.json())
      .then((data) => {
        set_data_file(data.map((item: any) => item._source));
      })
      .catch((error) => console.log("Error in Get ALl Queries:", error));
  }, []);
  return (
    <div>
      <NavBar />
      <form noValidate autoComplete="off">
        <main>
          <Container fixed>
            <Stack
              sx={{ pt: 4 }}
              direction="column"
              spacing={5}
              justifyContent="center"
            >
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={3}
                justifyContent="center"
              >
                <TextField
                  fullWidth
                  id="poem-name-search"
                  label="Poem Name"
                  variant="outlined"
                  value={poem_name}
                  onChange={(event) => set_poem_name(event.target.value)}
                />
                <TextField
                  fullWidth
                  id="source-search"
                  label="Source Domain"
                  variant="outlined"
                  value={source_domain}
                  onChange={(event) => set_source_domain(event.target.value)}
                />
                <TextField
                  fullWidth
                  id="target-search"
                  label="Target Domain"
                  variant="outlined"
                  value={target_domain}
                  onChange={(event) => set_target_domain(event.target.value)}
                />
                <Button
                  variant="contained"
                  startIcon={<SearchIcon />}
                  sx={{ width: "350px" }}
                  onClick={searchInputs}
                >
                  Search
                </Button>
              </Stack>
              {/* <MetaphorSearchResultTable dataJson={backendData} /> */}
            </Stack>
          </Container>
          <SearchTable dataJson={data_file} />
        </main>
      </form>
    </div>
  );
}

export default Search;
