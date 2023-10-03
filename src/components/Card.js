import React from "react";
/* import Star from "../images/Star1.png"; */

const Card = (props) => {
  return (
    <div className="individual--cards">
      <div className="picture--box">
        <img src={props.item.coverImg} alt="coverPhoto" className="coverPhoto" />
        {props.item.openSpots === 0 ? <p className="sold-out">Sold Out</p> : <p className="sold-out">{props.item.openSpots}</p>}
      </div>
      <div>
        <div className="star--box">
          <img src="./images/Star1.png" alt="star" className="star" />
          <p className="rating-p">
            {props.item.stats.rating}{" "}
            <span className="state-rate">
              ({props.item.stats.reviewCount}) . {props.item.location}
            </span>
          </p>
        </div>
        <h2>{props.item.title}</h2>
        <p className="amount--p">
          <strong>From ${props.item.price}</strong> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
