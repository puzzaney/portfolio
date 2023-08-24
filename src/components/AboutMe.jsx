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

export default function AboutMe() {
  return (
    <div className="about">
      <Title title="Skills" />
      <div className="about__icon-container">
        <Icon title="html5">
          {<SiHtml5 className="icon__container-icon" />}
        </Icon>

        <Icon title="css3">{<SiCss3 className="icon__container-icon" />}</Icon>

        <Icon title="javascript">
          {<SiJavascript className="icon__container-icon" />}
        </Icon>
      </div>
      <div className="about__icon-container">
        <Icon title="tailwindcss">
          {<SiTailwindcss className="icon__container-icon" />}
        </Icon>

        <Icon title="sass">{<SiSass className="icon__container-icon" />}</Icon>

        <Icon title="react">
          {<SiReact className="icon__container-icon" />}
        </Icon>
      </div>
    </div>
  );
}
