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
        <img src="/images/call3.avif" alt="img" />
      </div>
    </div>
  );
};

export default BgImage;
