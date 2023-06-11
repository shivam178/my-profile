import React from 'react';
import BackgroundBubbles from '../components/core/background.bubbles';
import BottomBar from '../components/core/bottomBar';
import { IndiaLogo } from '../components/core/svg';
import ProfileImg from '../images/profile.jpg';
import { AppContent } from '../components/core/appContent';

// markup
const IndexPage = () => {
  return (
    <BackgroundBubbles>
      {/* <TopBar /> */}
      <AppContent>
        <title>My Profile</title>
        <div className="grid md:grid-cols-2 gap-4 content-center sm:grid-cold-1">
          <div>
            <h1 className="mt-0 mb-10 text-3xl">
              Hello
              <br />
              <span>— I'm Shivam!</span>
              <br />
              <div className='flex'>
                <span>From India</span>
                <IndiaLogo className='h-10 pl-3 pb-1' />
              </div>
              <br />
              <span>
                Click{' '}
                <a href="/projects">
                  <span>here</span>
                </a>{' '}
                to see my projects.
              </span>
            </h1>
          </div>
          <div className="my-0 mx-auto">
            <img src={ProfileImg} className="h-96 rounded-full" alt="Shivam" />
            <div className="text-xl mt-5 flex justify-center">
              This is me
            </div>
          </div>
        </div>
        <div className='grid mt-auto'>
          <BottomBar />
        </div>
      </AppContent>
    </BackgroundBubbles>
  );
};

export default IndexPage;
