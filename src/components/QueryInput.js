import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
const QueryInput = ({
  query,
  setquery,
  fetchQuery,
  setSelectState,
  selectState,
}) => {
  const handleStateChange = (evt) => {
    setSelectState(evt.target.value);
  };

  const changeHandler = (evt) => {
    setquery(evt.target.value);
  };

  useEffect(() => {
    fetchQuery();
  }, [query, selectState]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          fontFamily: "Lato",
          alignItems: "center",
          backgroundColor: "#393E46 ",
          padding: "10px",
          border: "5px solid #393E46 ",
        }}
      >
        <p style={{ width: "5%", margin: "0px 10px" }}></p>
        <SearchIcon
          style={{
            color: "#6D9886",
            backgroundColor: "white",
            fontSize: "36px",
          }}
        />
        <input
          style={{
            outline: "none",
            border: "none",
            padding: "0px",
            height: "36px",
            width: "100vw",
            margin: "0px",
            backgroundColor: "white",
          }}
          placeholder="Search stories here..."
          onChange={changeHandler}
        ></input>
        <TuneIcon
          style={{ width: "5%", color: "#F2E7D5", margin: "0px 10px" }}
        />
      </div>

      <div style={{ backgroundColor: "#F2E7D5", padding: "25px" }}>
        Search
        <select
          onChange={handleStateChange}
          style={{ padding: "5px", marginLeft: "5px", fontSize: "15px" }}
        >
          <option value="">All </option>
          <option value="story" selected>
            Stories
          </option>
          <option value="poll"> Poll</option>
          <option value="pollopt"> Pollopt</option>
          <option value="comment"> Comments</option>
        </select>
        &nbsp;by
        <select style={{ padding: "5px", marginLeft: "5px", fontSize: "15px" }}>
          <option selected> Popularity</option>
        </select>
        &nbsp;for
        <select style={{ padding: "5px", marginLeft: "5px", fontSize: "15px" }}>
          <option selected>All time</option>
        </select>
      </div>
    </div>
  );
};

export default QueryInput;
