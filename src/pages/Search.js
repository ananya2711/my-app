import React, { useEffect, useState } from "react";
// import "./App.css";
import QueryInput from "../components/QueryInput";
import QueryOutput from "../components/QueryOutput";

// https://hn.algolia.com/api/v1/search?tags=story&hitsPerPage=1000
function App() {
  const [query, setquery] = useState("");
  // Associated with search bar
  const [result, setresult] = useState([]);
  const [selectState, setSelectState] = useState("");
  // console.log(result);
  const fetchQuery = () => {
    fetch(
      `https://hn.algolia.com/api/v1/search?query=${query}&tags=${selectState}&hitsPerPage=100`
    )
      .then((response) => response.json())
      .then((r) => {
        setresult((p) => {
          return r.hits;
        });
      });
  };

  useEffect(() => {
    fetch(`http://hn.algolia.com/api/v1/search?query=`)
      .then((response) => response.json())
      .then((r) => {
        setresult((p) => {
          console.log(r.hits);
          return r.hits;
        });
      });
  }, []);
  return (
    <div className="App">
      <QueryInput
        selectState={selectState}
        setSelectState={setSelectState}
        query={query}
        setquery={setquery}
        fetchQuery={fetchQuery}
      />
      <QueryOutput
        result={result}
        query={query}
        setresult={setresult}
        stateInfo={selectState}
      />
    </div>
  );
}

export default App;
