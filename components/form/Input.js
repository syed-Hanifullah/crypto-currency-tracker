import React from "react";

const Input = ({ ...rest }) => <input className="input input-bordered w-full max-w-xs" {...rest} />;

export default React.memo(Input);
