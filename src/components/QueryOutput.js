import React from "react";
import QueryItem from "./QueryItem";
import "../styles/QueryOutput.css";
const QueryOutput = ({ result, query, stateInfo }) => {
  const emptyHandler = () => {
    if (result.length === 0 && query !== "") {
      return (
        <div
          style={{
            backgroundColor: "#F2E7D5",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            fontFamily: "Lato",
            fontSize: "30px",
            padding: "30px",
          }}
        >
          We found nothing matching {query}
        </div>
      );
    }
  };
  return (
    <div style={{ backgroundColor: "#F2E7D5" }}>
      {emptyHandler()}
      {result.map((item, itemindex) => (
        <QueryItem item={item} itemindex={itemindex} stateInfo={stateInfo} />
      ))}
    </div>
  );
};

export default QueryOutput;
