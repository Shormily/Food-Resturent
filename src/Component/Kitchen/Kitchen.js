import React, { useEffect, useState } from "react";

const Kitchen = () => {
  const [dataon, setData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(dataon);
  return <div></div>;
};

export default Kitchen;
