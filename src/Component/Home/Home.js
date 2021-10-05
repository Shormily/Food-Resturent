import React from "react";
import Part1 from "../Part/Part1";
import { useEffect, useState } from "react";
import "./home.css";

const Home = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div>
      <div>
        <div className="Display">
          <h1 className="margin">
            In our School <span className="Sentence">You Can Learn</span>{" "}
            cooking food
          </h1>

          {/* <h3 className="color">In our School you can learn cooking food </h3>
          <h5>We are taught to prepare different types of Food</h5>
          <h6>Here at different courses and in advanced ways.</h6>
          <h6> Read below and learn more.</h6> */}
          <div>
            <p className="of-topic"></p>
          </div>
        </div>
      </div>
      <section className="container py-5">
        <h2 className="text-center mb-3">Latest Courses</h2>
        <div className="row g-4">
          {foods.slice(0, 4).map((food) => (
            <div className="col-lg-3 h-100">
              <Part1 food={food}></Part1>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
