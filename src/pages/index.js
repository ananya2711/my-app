// Landing page render
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import QueryOutput from "../components/QueryOutput";

function Story() {
  const [query] = useState("");
  const [result, setresult] = useState([]);
  const [selectState] = useState("news");
  const [page, setPage] = React.useState(1);

  // On page number change fetch new data
  const handleChange = (event, value) => {
    setPage(value);
    fetch(
      `http://hn.algolia.com/api/v1/search_by_date?query=${
        query - 1
      }&hitsPerPage=20&page=${page}`
    )
      .then((response) => response.json())
      .then((r) => {
        setresult((p) => {
          return r.hits;
        });
      });
    return (
      <div className="App">
        <QueryOutput
          result={result}
          query={query}
          setresult={setresult}
          stateInfo={selectState}
        />
      </div>
    );
  };

  // load inital data on page load
  useEffect(() => {
    fetch(
      `http://hn.algolia.com/api/v1/search_by_date?query=${query}&hitsPerPage=20&page=${
        page - 1
      }`
    )
      .then((response) => response.json())
      .then((r) => {
        setresult((p) => {
          return r.hits;
        });
      });
  }, []);
  return (
    <div className="App" style={{ backgroundColor: "#F2E7D5" }}>
      <QueryOutput
        result={result}
        query={query}
        setresult={setresult}
        stateInfo={selectState}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2%",
          paddingBottom: "2%",
          marginTop: "-5px",
        }}
      >
        <Pagination
          count={10}
          page={page}
          color="standard"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Story;
