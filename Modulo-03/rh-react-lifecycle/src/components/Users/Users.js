/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import User from './User';

export default function Users({ users }) {
  const [secondsVisible, setSecondsVisible] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsVisible(secondsVisible + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [secondsVisible]);

  return (
    <>
      <div>
        <p>Componente Users visível por {secondsVisible} por segundos</p>
        <ul>
          {users.map((user) => {
            const { login } = user;
            return (
              <li key={login.uuid}>
                <User user={user} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
