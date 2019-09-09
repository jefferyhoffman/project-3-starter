import React from "react";
import "./PostPostIt.css";

const PostPostIt = props => {
  const postImageArray = [
    "https://www.stickpng.com/assets/images/58889250bc2fc2ef3a1860ab.png",
    "https://www.stickpng.com/assets/images/588891f2bc2fc2ef3a1860a5.png"
  ];
  const postImage =
    postImageArray[Math.floor(Math.random() * postImageArray.length)];

  return (
    <div className="PostPostIt">
      <div>
        <img
          src={postImage}
          alt="url"
          className="roundImg"
          style={{ width: "60px " }}
        />
        <h3>{props.category}</h3>
        <h5>{props.post_title}</h5>
        <btn className="PostPostIt_btn btn">More</btn>
      </div>
      <div></div>
    </div>
  );
};

export default PostPostIt;
