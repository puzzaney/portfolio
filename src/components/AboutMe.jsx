import React from 'react';
import Title from './Title';
import Explore from './Explore';
import { GiStoneCrafting } from 'react-icons/gi';
import { TbSettingsCode } from 'react-icons/tb';

export default function AboutMe() {
  return (
    <div className="aboutme" id="aboutme">
      <Title title="About Me" />
      <p className="aboutme__description">
        I'm an enthusiastic Front-End React Developer, committed to designing
        and developing captivating user interfaces. Proficient in HTML, CSS, and
        JavaScript, I excel in translating design visions into interactive web
        applications. By leveraging the power of React and prioritizing
        responsive design, I aspire to craft intuitive digital solutions that
        make a meaningful impression.
      </p>

      <h3 className="aboutme__explore">Explore</h3>

      <div className="explore-container">
        <Explore
          title="development"
          description="I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job."
          icon={<GiStoneCrafting className="explore__icon" />}
        />
        <Explore
          title="maintenance"
          description="I can maintain the site to prevent possible error and fix the problem right away and to add new features and programs. "
          icon={<TbSettingsCode className="explore__icon" />}
        />
      </div>
    </div>
  );
}
