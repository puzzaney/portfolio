import Title from './Title';
import Icon from './Icon';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiSass,
  SiReact,
} from 'react-icons/si';
import SkillsIconContainer from './SkillsIconContainer';

export default function AboutMe() {
  return (
    <div className="skills">
      <Title title="Skills" />
      <SkillsIconContainer
        title1="html5"
        icon1={<SiHtml5 className="icon__container-icon" />}
        title2="css3"
        icon2={<SiCss3 className="icon__container-icon" />}
        title3="javascript"
        icon3={<SiJavascript className="icon__container-icon" />}
      />
      <SkillsIconContainer
        title1="tailwindcss"
        icon1={<SiTailwindcss className="icon__container-icon" />}
        title2="sass"
        icon2={<SiSass className="icon__container-icon" />}
        title3="react"
        icon3={<SiReact className="icon__container-icon" />}
      />
    </div>
  );
}
