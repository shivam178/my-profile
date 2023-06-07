import * as React from 'react';
import '../../css/bubbles.scss' 

const BackgroundBubbles = ({ children }: any) => {
  return (
    <>
      <div className="bubbles body-dark">
        {children}
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
    </>
  );
};

export default BackgroundBubbles;
