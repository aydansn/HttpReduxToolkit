import React from "react";

const User = ({ user }) => {
  return (
    <div style={{  border: "1px solid red"}}>
      {user.name}
      -
      {user.email}
    </div>
  );
};

export default User;
