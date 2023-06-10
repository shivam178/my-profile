import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/MailOutline';

const BottomBar = () => {
  const iconDefaultClasses =
    'text-7xl transition ease-in-out hover:-translate-y-1 hover:scale-125 duration-100';

  const myAccountsArr = [
    {
      link: 'https://github.com/shivam178/',
      icon: <GithubIcon className={iconDefaultClasses} color="secondary" />,
    },
    {
      link: 'https://www.linkedin.com/in/shivam-sharma178/',
      icon: <LinkedInIcon className={iconDefaultClasses} color="secondary" />,
    },
    {
      link: 'https://www.instagram.com/shivam.s_17/',
      icon: <InstagramIcon className={iconDefaultClasses} color="secondary" />,
    },
    {
      link: 'https://www.facebook.com/profile.php?id=100001802089554',
      icon: <FacebookIcon className={iconDefaultClasses} color="secondary" />,
    },
    {
      link: `mailto:${encodeURIComponent('shivam178sharma@gmail.com')}`,
      icon: <MailIcon className={iconDefaultClasses} color="secondary" />,
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center">
      {myAccountsArr.map((e) => (
        <a href={e.link} target="_blank">
          {e.icon}
        </a>
      ))}
    </div>
  );
};

export default BottomBar;
