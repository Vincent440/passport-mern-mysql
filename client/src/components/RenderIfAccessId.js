import React from "react";
// A function to wrap a component with that will render its children only if the user is logged in and 
// has an access_id that matches the aId passed as a prop to the function.
const RenderIfAccessId = (props) => {
  if (props.user.access_id >= props.aId) {
    return (<div>{props.children}</div>);
  }
  return (null);
};

export default RenderIfAccessId;