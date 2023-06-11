import * as React from 'react';
import '../../css/bubbles.scss' 

const BackgroundBubbles = ({ children }: { children: React.ReactNode }) => {
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
