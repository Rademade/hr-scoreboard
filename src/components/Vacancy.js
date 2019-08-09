import React from "react";
import moment from "moment";
// import Details from "./Details";

function Vacancy({
  status,
  position,
  responsiblesPerson,
  dc,
  clientId,
  detailedInfo
}) {
  const creationDate = moment(dc).format("MMMM Do YYYY");

  if (!(status === "inwork" || status === "open")) {
    return null;
  }

  return (
    <div style={{ width: "25%" }}>
      <div
        style={{
          borderRight: "solid 1px white",
          borderBottom: "solid 1px white",
          height: "100%"
        }}
      >
        <h4 style={{ margin: 0 }}>{position}</h4>
        <div style={{ display: "flex" }}>
          <p style={{ margin: 0 }}>Created:</p>
          <p style={{ margin: 0 }}>{creationDate}</p>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ margin: 0 }}>Client:</p>
          <p style={{ margin: 0 }}>{clientId.name}</p>
        </div>
        <div>
          <p style={{ margin: 0 }}>Responsibles</p>
          <div style={{ display: "flex" }}>
            {responsiblesPerson
              .filter(({ type }) => type === "recruiter")
              .map(({ personId, responsible }, index, array) => {
                const comma =
                  index < array.length - 1 && array.length > 1 ? "," : "";
                return (
                  <p style={{ margin: 0 }} key={personId}>
                    {responsible.fullName + comma}
                  </p>
                );
              })}
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ margin: 0 }}>State</p>
            <p style={{ margin: 0 }}>Current Week</p>
            <p style={{ margin: 0 }}>All</p>
          </div>
          <div>
            {detailedInfo.map(
              ({ id, description, weekDetailInfo, detailInfo }) => (
                <div
                  key={id}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ margin: 0 }}>{description}</p>
                  <p style={{ margin: 0 }}>{weekDetailInfo.length}</p>
                  <p style={{ margin: 0 }}>{detailInfo.length}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vacancy;
