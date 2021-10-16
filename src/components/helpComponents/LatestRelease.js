import React from "react";

function LatestRelease(props) {
  return (
    <>
      <div
        className="el-latest-releses p-2 pl-4 mb-2 d-flex flex-row justify-content-between align-items-center"
        style={{ borderLeft: "3px solid var(--RedScad" }}
      >
        <div >
          <div
            className="date-latest-release"
            style={{ color: "#AAA", fontSize: "0.8em" }}
          >
            {props.latest.date}
          </div>

          <div className="header-latest-release">
            
            {props.latest.header}
          </div>
        </div>

        <span>
            &gt;
        </span>
      </div>
    </>
  );
}

export default LatestRelease;
