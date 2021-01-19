import React from 'react';
import FlipMove from 'react-flip-move';
import Candidate from './Candidate';
import Card from './Card';

export default function Candidates({ candidates }) {
  return (
    <div>
      <FlipMove>
        {candidates.map((candidate, index) => {
          const { id } = candidate;
          return (
            <div key={id}>
              <Card>
                <Candidate candidate={candidate} position={index + 1} />
              </Card>
            </div>
          );
        })}
      </FlipMove>
    </div>
  );
}
