import React, { useEffect, useState } from "react";
// import "./App.css";
import QueryOutput from "../components/QueryOutput";

function Story() {
  const [query] = useState("");
  // Associated with search bar
  const [result, setresult] = useState([]);
  const [selectState] = useState("news");
  // console.log(result);

  useEffect(() => {
    fetch(
      `http://hn.algolia.com/api/v1/search_by_date?query=${query}&hitsPerPage=100`
    )
      .then((response) => response.json())
      .then((r) => {
        setresult((p) => {
          return r.hits;
        });
      });
  }, []);
  return (
    <div className="App">
      {console.log(result)}
      <QueryOutput
        result={result}
        query={query}
        setresult={setresult}
        stateInfo={selectState}
      />
    </div>
  );
}

export default Story;
