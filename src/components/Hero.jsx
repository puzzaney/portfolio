import React from 'react';
import Portrait from '../imgs/portrait.jpg';

export default function Hero() {
  return (
    <main>
      <div className="hero__container">
        <div className="hero__intro">Hello</div>
        <img src={Portrait} alt="my photo" className="hero__img" />
      </div>
    </main>
  );
}
