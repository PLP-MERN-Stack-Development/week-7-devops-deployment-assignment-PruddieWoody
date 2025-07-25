import React, { useEffect, useState } from "react";

function Hello() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);
  return <div>{message}</div>;
}

export default Hello;
