import React from 'react';

export default function Title({ title }) {
  return (
    <div className="title">
      <h3 className="title__primary">{title}</h3>
    </div>
  );
}
