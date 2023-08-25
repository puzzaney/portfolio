import React from 'react';

export default function Explore({ title, description, icon }) {
  return (
    <div className="explore">
      <h3 className="explore__title">{title}</h3>
      <p className="explore__description">{description}</p>
      {icon}
    </div>
  );
}
