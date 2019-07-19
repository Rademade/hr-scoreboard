import React from "react";

function Funnel({ details }) {
  // console.log("Funnel", details);
  return (
    <div style={{ padding: "10px" }}>
      <p>funnel</p>
      {details.map(item => (
        <Stage
          key={item.id}
          title={item.description}
          value={item.detailInfo.length}
        />
      ))}
    </div>
  );
}

const Stage = ({ title, value }) => (
  <div style={{ display: "flex" }}>
    <p style={{ margin: "0px" }}>{title}</p>
    <p style={{ margin: "0px 0px 0px 20px" }}>{value}</p>
  </div>
);

export default Funnel;
