import Portrait from '../imgs/portrait.jpg';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Hero() {
  return (
    <main className="hero">
      <div className="hero__container">
        <div className="hero__intro">
          <h1 className="hero__intro-primary">Front-end Web Developer 👋</h1>
          <p className="hero__intro-secondary">
            Hi, I'm PuzZan. A passionate Front-end React Developer based in
            Nepal. 📍
          </p>
          <div className="hero__socials">
            <a
              href="https://www.linkedin.com/in/pujan-karki-3b31a4240/"
              className="hero__socials-link"
            >
              <BsGithub className="hero__socials-icon" />
            </a>
            <a
              href="https://github.com/puzzaney"
              className="hero__socials-link"
            >
              <BsLinkedin className="hero__socials-icon" />
            </a>
          </div>
        </div>
        <img src={Portrait} alt="my photo" className="hero__img" />
      </div>
    </main>
  );
}
