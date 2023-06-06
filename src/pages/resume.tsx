import * as React from 'react';
import BackgroundStars from '../components/core/background.stars';
import BackgroundBubbles from '../components/core/background.bubbles';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const Resume = () => {
  return (
    <BackgroundBubbles>
      <main style={pageStyles} className="body-dark w-full h-full">
        Resume
      </main>
    </BackgroundBubbles>
  );
};
export default Resume;
