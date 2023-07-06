import React from "react";

const Card = ({ children, className = "", ...rest }) => {
 return (
  <div className={`card bg-base-200 shadow-xl ${className}`} {...rest}>
   <div className="card-body">{children}</div>
  </div>
 );
};

export default Card;
