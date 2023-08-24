import React from 'react';

export default function Icon({ children, title }) {
  return (
    <div className="icon__container">
      {children}
      <h4 className="icon__container-title">{title}</h4>
    </div>
  );
}
