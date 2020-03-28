import React from "react";
import "./Avatar.css";

function Avatar({ image, firstName, lastName, star }) {
  return (
    <article className={star ? "star" : ""}>
      <figure>
        <img
          src={
            image
              ? image
              : "https://www.drupal.org/files/issues/default-avatar.png"
          }
          alt="simpson"
        />
        <figcaption>
          {firstName} {lastName}
        </figcaption>
      </figure>
    </article>
  );
}
export default Avatar;
