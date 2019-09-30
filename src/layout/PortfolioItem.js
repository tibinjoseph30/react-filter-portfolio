import React from "react";
function PortfolioItem(props) {
  const { item } = props;
  return (
    <div>
      <div className="tiles">
        <h1>{item.number}</h1>
        <p className="mb-0">{item.category}</p>
      </div>
    </div>
  );
}
export default PortfolioItem;
