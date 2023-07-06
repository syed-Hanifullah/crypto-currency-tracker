import React, { useEffect } from "react";

const Toast = ({ visible = false, setVisible = () => {}, message = "" }) => {
 useEffect(() => {
  let timeout = null;
  if (visible) timeout = setTimeout(() => setVisible(false), 2000);

  return () => clearTimeout(timeout);
 }, [visible]);
 if (!visible) return;

 return (
  <div className="toast z-50">
   <div className="alert alert-info">
    <span>{message}</span>
   </div>
  </div>
 );
};

export default Toast;
