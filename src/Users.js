import { useState, useEffect } from "react";
const Users = ({ users }) => {
  return (
    <>
      <h1>{users.name}</h1>
      <p>{users.email}</p>
      <p>{users.username}</p>
    </>
  );
};
export default Users;
