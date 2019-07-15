import React from "react";

function Funnel({ details }) {
  console.log("Funnel", details);
  return (
    <div style={{ padding: "10px", borderTop: "solid 2px green" }}>
      <Stage title={"Funnel"} value={600} />
    </div>
  );
}

const Stage = ({ title, value }) => (
  <div style={{ display: "flex" }}>
    <p style={{ margin: "0px" }}>{title}</p>
    <p style={{ margin: "0px" }}>{value}</p>
  </div>
);

export default Funnel;
