import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <article className="card">
      <figure>
        <img
          src={props.cardImg}
          alt="pic"
        />
      </figure>
      <h3 className="class_info">{props.cardTitle}</h3>
      <p className="class_info">{props.cardDescription}</p>
      <a href={props.cardLink}>
        <button>{props.cardButton}</button>
      </a>
    </article>
  );
}
export default Card;
