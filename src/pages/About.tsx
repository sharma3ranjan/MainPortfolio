import { FC } from 'react';
import Card from '../components/Card/Card';
import Nav from '../components/Nav/Nav';

const About: FC = () => {
  return (
    <div className='bg-[url("/public/assets/Hero-2.png")] md:bg-cover h-screen'>
      <Nav />
      <Card />
    </div>
  );
};

export default About;
