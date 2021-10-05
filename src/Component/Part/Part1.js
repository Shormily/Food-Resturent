import React from "react";

const Part1 = (props) => {
  const { name, price, img } = props.food;
  return (
    <div>
      <div class="card h-100">
        <img src={img} class="card-img-top img-fluid h-50" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">Price: ${price}.</p>
          <a href="#" class="btn btn-primary">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Part1;
