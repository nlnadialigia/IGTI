import React from 'react';

const stars = {
  empty: '☆',
  full: '★',
};

const maxStars = 10;

export default function Popularity({ value }) {
  const fullStars = stars.full.repeat(value);
  const emptyStars = stars.empty.repeat(maxStars - value);
  return (
    <div style={{ fontSize: '1.5rem', color: '#f39c12' }}>
      {fullStars}
      {emptyStars}
    </div>
  );
}
