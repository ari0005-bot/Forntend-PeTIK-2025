import "../../App.css";
import "./Card2.css";

const Card2 = ({
  title,
  price,
  benefit1,
  benefit2,
  benefit3,
  benefit4,
  isPopular = false,
}) => {
  return (
    <div className={`card ${isPopular ? "cardPopular" : ""}`}>
      <div className={`card-header ${isPopular ? "cardPopular" : ""}`}>
        <h3>
          {title}{" "}
          <span
            className= {`${isPopular ? "badge-popular" : ""}`}>
            {isPopular ? "Popular" : ""}
          </span>
        </h3>
        <h1>
          ${price} <small>/Month</small>
        </h1>
      </div>
      <div className="card-body">
        <ul>
          <li>{benefit1}</li>
          <li>{benefit2}</li>
          <li>{benefit3}</li>
          <li>{benefit4}</li>
        </ul>
        <button className={`btn ${isPopular ? "btnPopular" : ""}`}>Purchase Plan</button>
      </div>
    </div>
  );
};

export default Card2;
