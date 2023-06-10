import React from 'react';
import BackgroundBubbles from '../components/core/background.bubbles';
import BottomBar from '../components/core/bottomBar';
import { IndiaLogo } from '../components/core/svg';
import ProfileImg from '../images/profile.jpg';

const linkStyle = {
  color: '#663399',
  fontWeight: 'bold',
  verticalAlign: '5%',
};

// markup
const IndexPage = () => {
  return (
    <BackgroundBubbles>
      {/* <TopBar /> */}
      <main className='z-50 p-7 h-full flex flex-col'>
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
                <a style={linkStyle} href="/resume">
                  here
                </a>{' '}
                to see my web resume.
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
      </main>
    </BackgroundBubbles>
  );
};

export default IndexPage;
