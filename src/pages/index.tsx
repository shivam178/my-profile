import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import * as React from 'react';
import TopBar from '../components/core/appBar';
import BackgroundBubbles from '../components/core/background.bubbles';
import ProfileImg from '../images/profile.jpg';
import { IndiaLogo } from '../components/core/svg';

// styles
const headingAccentStyles = {
  color: '#8954A8',
};

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
      <main className='z-50 p-7'>
        <title>My Profile</title>
        <div className="grid grid-cols-2 gap-4 content-center">
          <div>
            <h1 className="mt-0 mb-10 text-3xl">
              Hello
              <br />
              <span style={headingAccentStyles}>— I'm Shivam!</span>
              <br />
              <div className='flex'>
                <span style={headingAccentStyles}>From India</span>
                <IndiaLogo className='h-10 pl-3 pb-1' />
              </div>
              <br />
              <span style={headingAccentStyles}>
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
            <div style={headingAccentStyles} className="text-xl mt-5">
              This is me
            </div>
            <div style={headingAccentStyles} className="mt-8">
              Wanna know more about me?
            </div>
            <div className="flex">
              <a href="https://github.com/shivam178/" target="_blank">
                <GithubIcon fontSize='large' color='secondary' />
              </a>
              <a href="https://www.linkedin.com/in/shivam-sharma178/" target="_blank">
                <LinkedInIcon fontSize='large' color='secondary' />
              </a>
              <a href="https://www.instagram.com/shivam.s_17/" target="_blank">
                <InstagramIcon fontSize='large' color='secondary' />
              </a>
            </div>
          </div>
        </div>
      </main>
    </BackgroundBubbles>
  );
};

export default IndexPage;
