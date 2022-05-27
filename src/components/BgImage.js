import React from "react";

const BgImage = () => {
  return (
    <div className="background bg-primary">
      <div className="intros">
        <div className="intro-texts">
          <div className="intro one">Hi</div>
          <div className="intro two">I'm Doluwamu</div>
        </div>
        <div className="intro-line"></div>
      </div>

      <div className="bg-image">
        <img
          src="https://res.cloudinary.com/book-with-me-react/image/upload/v1653672036/IMG_20220524_195618-removebg-preview_sa2gtc.png"
          alt="img"
        />
      </div>
    </div>
  );
};

export default BgImage;

// "https://res.cloudinary.com/book-with-me-react/image/upload/v1653421219/IMG_20220524_195618_o2lwpx.jpg"
