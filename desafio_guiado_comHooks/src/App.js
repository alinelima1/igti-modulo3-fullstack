import React, { useState } from 'react';
import { getNewTimestamp } from './helpers/dateTimeHelper';

export default function App() {
  const [clickArray, setClickArray] = useState([]);

  const handleClick = () => {
    const newClickArray = Object.assign([], clickArray);

    newClickArray.push(getNewTimestamp());

    setClickArray(newClickArray);
  };

  return (
    <div>
      <h1>
        React e <em>Hooks</em>
      </h1>

      <button onClick={handleClick}>Clique aqui.</button>

      <ul>
        {clickArray.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
