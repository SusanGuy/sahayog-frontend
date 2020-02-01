import React from "react";
import "./ppImage.css";
const ppImage = ({ small, name, avatar }) => {
  const classes = ["profile-image"];
  if (small) {
    classes.join("dropdown-image");
  }
  return (
    <img
      className={classes.join(" ")}
      src={
        avatar
          ? `data:image/png;base64, ${avatar}`
          : "https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/07-512.png"
      }
      alt={name ? name : "users image"}
    />
  );
};

export default ppImage;
