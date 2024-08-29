// import React from "react";
import Grandchildcomponent from "./Grandchildcomponent";
const Childcomponent = (props) => {
  return (
    <div>
      <Grandchildcomponent data={props.data} />
    </div>
  );
};

export default Childcomponent;
