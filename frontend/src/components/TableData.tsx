import React, { useEffect, useState } from "react";

interface TableDataProps {
  data_file: any[];
}

function TableData() {
  const [data_file, set_data_file] = useState([]);
  const [poem_name, set_poem_name] = useState("");
  const [source_domain, set_source_domain] = useState("");
  const [target_domain, set_target_domain] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/getAllQueries")
      .then((response) => response.json())
      .then((data) => {
        set_data_file(data.map((item: any) => item._source));
      })
      .catch((error) => console.log("Error in Get ALl Queries:", error));
  }, []);
  return <div></div>;
}

export default TableData;
