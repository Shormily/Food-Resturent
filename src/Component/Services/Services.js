import React, { useEffect, useState } from "react";
import "./Services.css";
import Part from "../Part/Part1";
import Part1 from "../Part/Part1";

const Services = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  // console.log(foods);

  return (
    <div>
      <h1 className="background">
        About US Our Cooking Course || And Item List
      </h1>
      <div className="shop-contianer row row-cols-1 row-cols-md-3 g-4 px-5"></div>
      <section className="container py-5">
        <div className="row g-4">
          {foods.map((food) => (
            <div className="col-lg-4 h-100">
              <Part1 food={food}></Part1>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
