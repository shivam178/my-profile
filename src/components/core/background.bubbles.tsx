import * as React from 'react';
import '../../css/bubbles.scss' 

const BackgroundBubbles = ({ children }: any) => {
  return (
    <>
      <div className="bubbles body-dark">
        {children}
        {
          new Array(50).map(e => <div className="bubble"></div>)
        }
      </div>
    </>
  );
};

export default BackgroundBubbles;
