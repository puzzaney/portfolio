import React from 'react';
import Icon from './Icon';

export default function SkillsIconContainer({
  title1,
  icon1,
  title2,
  icon2,
  title3,
  icon3,
}) {
  return (
    <div className="about__icon-container">
      <Icon title={title1}>{icon1}</Icon>

      <Icon title={title2}>{icon2}</Icon>

      <Icon title={title3}>{icon3}</Icon>
    </div>
  );
}
