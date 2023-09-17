import React, { useState } from "react";
import UserItem from "./UserItem";

export default function Users(props) {
  console.log("check inside users", props.userItems);
  let userEntries = props.userItems.map((user) => {
    return (
      <UserItem key={Math.random()} username={user.username} age={user.age} />
    );
  });

  return <div>{props.userItems.length && userEntries}</div>;
}
