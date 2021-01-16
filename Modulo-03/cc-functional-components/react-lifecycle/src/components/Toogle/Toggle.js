import React from 'react';

export default function Toggle({ onToggle, enable, description }) {
  const handleChange = (event) => {
    const isChecked = event.target.checked;
    onToggle(isChecked);
  };

  return (
    <div className="switch">
      <label>
        {description}
        <input type="checkbox" checked={enable} onChange={handleChange} />
        <span className="lever"></span>
      </label>
    </div>
  );
}
