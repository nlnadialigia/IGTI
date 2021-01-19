import React from 'react';
import Info from './Info';
import Name from './Name';
import Picture from './Picture';
import Position from './Position';
import Votes from './Votes';
import Percentage from './Percentage';
import Popularity from './Popularity';
import css from './candidate.module.css';
import { formatNumber, formatPercentage } from '../utils/format';

export default function Candidate({ candidate, position }) {
  const { name, votes, id, percentage, popularity } = candidate;
  const imageSource = `${id}.jpg`;
  return (
    <div className={css.flexRow}>
      <Position>{position}</Position>
      <Picture imageSource={imageSource} />
      <Info>
        <Name>{name}</Name>
        <Votes value={votes} />
        <Percentage>{formatPercentage(percentage)}</Percentage>
        <Popularity value={popularity} />
      </Info>
    </div>
  );
}
