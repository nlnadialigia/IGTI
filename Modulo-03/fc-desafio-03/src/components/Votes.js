/* eslint-disable no-console */
import React from 'react';
import CountUp from 'react-countup';

export default function Votes({ value }) {
  return (
    <div>
      <CountUp start={value - 1000} end={value} duration={0.6} separator=".">
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </div>
  );
}
