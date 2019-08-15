import React from "react";

const emblemAll = ({ emblem }) => {
  const emblemGroup = emblem.map(emblem => {
    return (
      <div className="emblem" key={emblem.id}>
        <div>Type: {emblem.emblemType}</div>
        <div>Enabled?: {emblem.enabled}</div>
        <div>Image: {emblem.display}</div>
      </div>
    );
  });

  return <div className="emblem-list">{emblemGroup}</div>;
};

export default emblemAll;
