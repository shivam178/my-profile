import React from 'react';
import BottomBar from '../components/core/bottomBar';
import BackgroundBubbles from '../components/core/background.bubbles';
import { AppContent } from '../components/core/appContent';
import BlogPostImage1 from '../images/blog-post-ss1.png';
import BlogPostImage2 from '../images/blog-post-ss2.png';
import ContactListImage1 from '../images/contact-list-ss1.png';
import TodoListImage1 from '../images/todo-list-ss1.png';
import TodoListImage2 from '../images/todo-list-ss2.png';
import ColorGameImage1 from '../images/color-game-ss1.png';
import ColorGameImage2 from '../images/color-game-ss2.png';

const PreviousCompanies = () => {
  const projectsDataArr = [
    {
      githubRepo: 'https://github.com/shivam178/react-express-mongodb-example',
      projectName: 'Blog Post',
      // techUsed:
      details: `A backend project in which we're storing all the blogs in MongoDB with expressJS server
      in NodeJS. We're using Mongoose for ODM (Object Data Modeling). It saves all the blogs data and presents the data in the frontend which is in ReactJS.`,
      images: [BlogPostImage1, BlogPostImage2],
    },
    {
      githubRepo: 'https://github.com/shivam178/contact-list',
      projectName: 'Contact list',
      // techUsed:
      details: `An authenticated site which stores all the contacts and stores them in MongoDb.
      We've created dockerised containers by which we can initiase MongoDb client. The frontend is in NextJs and the backend is currenly in ExpressJS.
      Migration of backend to NextJs is in progress.`,
      images: [ContactListImage1],
    },
    {
      githubRepo: 'https://github.com/shivam178/todo-list',
      deployedLink: 'https://shivam178.github.io/todo-list/Index.HTML',
      projectName: 'Todo List',
      // techUsed:
      details: `Todo List using HTML, CSS and jquery`,
      images: [TodoListImage1, TodoListImage2],
    },
    {
      githubRepo: 'https://github.com/shivam178/color-game',
      deployedLink: 'https://shivam178.github.io/color-game/colorgame.html',
      projectName: 'RGB color game',
      // techUsed:
      details: `RGB Color game using HTML, CSS and jquery. Guess the color using RGB code of the color`,
      images: [ColorGameImage1, ColorGameImage2],
    },
  ];
  return (
    <BackgroundBubbles>
      <AppContent>
        <span className="font-semibold text-4xl">My Projects</span>
        <div className="grid md:grid-cols-2 gap-4 content-center sm:grid-cold-1 mt-10 mb-10">
          {projectsDataArr.map((e, index) => {
            return (
              <div className="border rounded-lg p-5" key={index}>
                <span className="font-semibold text-xl flex justify-center">{e.projectName}</span>
                <div className="font-semibold text-xl mt-5">
                  <a target="_blank" href={e.githubRepo}>
                    <span>GitHub repo</span>
                  </a>
                  .
                </div>
                {e.deployedLink && (
                  <div className='mt-2'>
                    <a href={e.deployedLink} target="_blank">
                      <span>Test live</span>
                    </a>
                  </div>
                )}
                <div className="mt-2">{e.details}</div>
                <div className="mt-5 flex flex-col">
                  {e.images.map((e, index) => (
                    <img className="p-1" src={e} key={index + '-img'} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid mt-auto">
          <BottomBar />
        </div>
      </AppContent>
    </BackgroundBubbles>
  );
};

export default PreviousCompanies;
