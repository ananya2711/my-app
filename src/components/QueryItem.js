import React from "react";
import "../styles/QueryItem.css";

const QueryItem = ({ item, itemindex, stateInfo }) => {
  // var parse = require('html-react-parser');
  return (
    <div id="itemlist" style={{ marginLeft: "25px", paddingTop: "10px" }}>
      <div
        style={{
          fontFamily: "Lato",
          fontSize: "15px",
        }}
      >
        {/* for all and stories */}
        <div key={itemindex}>
          {stateInfo !== "comment" &&
            stateInfo !== "poll" &&
            stateInfo !== "pollopt" &&
            item.url !== null &&
            item.url !== "" && (
              <div
                style={{
                  padding: "10px",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  marginBottom: 10,
                }}
              >
                {" "}
                {item.title}
                <a
                  href={item.url}
                  style={{
                    fontSize: "15px",
                    color: "#878380",
                    textDecoration: "none",
                    marginLeft: "5px",
                    fontStyle: "italic",
                  }}
                >
                  ({item.url})
                </a>
                <div
                  style={{
                    display: "flex",
                    fontSize: "12px",
                    color: "#878380",
                    marginLeft: "15px",
                    marginTop: "5px",
                  }}
                >
                  <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
                    {item.points} points
                  </span>
                  |
                  <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
                    {item.author}
                  </span>
                  |
                  <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
                    {item.num_comments} comments
                  </span>
                </div>
              </div>
            )}

          {/* for comments */}
          {/* CANDO: change for security */}
          {stateInfo === "comment" && (
            <div
              style={{
                padding: "10px",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                marginBottom: 10,
              }}
            >
              <div>
                <b>{item.story_title}</b>
              </div>
              <br></br>
              <div
                dangerouslySetInnerHTML={{ __html: item.comment_text }}
              ></div>

              <div
                style={{
                  display: "flex",
                  fontSize: "12px",
                  color: "#878380",
                  marginLeft: "15px",
                  marginTop: "5px",
                }}
              >
                <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
                  {item.points} points
                </span>
                |
                <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
                  {item.author}
                </span>
                |
                <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
                  {item.num_comments} comments
                </span>
              </div>
            </div>
          )}
          {/* for poll */}

          {stateInfo === "poll" && (
            <div
              style={{
                padding: "10px",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                marginBottom: 10,
              }}
            >
              <div>
                <b>{item.title}</b>
              </div>
              <br></br>
              <div dangerouslySetInnerHTML={{ __html: item.story_text }}></div>
              <div
                style={{
                  display: "flex",
                  fontSize: "12px",
                  color: "#878380",
                  marginLeft: "15px",
                  marginTop: "5px",
                }}
              >
                <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
                  {item.points} points
                </span>
                |
                <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
                  {item.author}
                </span>
                |
                <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
                  {item.num_comments} comments
                </span>
              </div>
            </div>
          )}

          {/* for pollopt */}

          {stateInfo === "pollopt" && (
            <div
              style={{
                padding: "10px",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                marginBottom: 10,
              }}
            >
              <div>{item.story_text}</div>
              <div
                style={{
                  display: "flex",
                  fontSize: "12px",
                  color: "#878380",
                  marginLeft: "15px",
                  marginTop: "5px",
                }}
              >
                <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
                  {item.points} points
                </span>
                |
                <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
                  {item.author}
                </span>
                |
                <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
                  {item.num_comments} comments
                </span>
              </div>
            </div>
          )}
          {/* for news */}
          {stateInfo === "news" &&
            item.story_url !== null &&
            item.story_url !== "" && (
              <div
                style={{
                  padding: "10px",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  marginBottom: 10,
                }}
              >
                {" "}
                {item.story_title}
                <a
                  href={item.story_url}
                  style={{
                    fontSize: "15px",
                    color: "#878380",
                    textDecoration: "none",
                    marginLeft: "5px",
                    fontStyle: "italic",
                  }}
                >
                  ({item.story_url})
                </a>
                <div
                  style={{
                    display: "flex",
                    fontSize: "12px",
                    color: "#878380",
                    marginLeft: "15px",
                    marginTop: "5px",
                  }}
                >
                  <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
                    {item.points} points
                  </span>
                  |
                  <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
                    {item.author}
                  </span>
                  |
                  <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
                    {item.num_comments} comments
                  </span>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default QueryItem;
