import React from 'react';

function TInput(props) {
  const { label, type, value, onChange } = props;

  return (
    <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px', width:"100vh" }}>
      <span style={{ marginBottom: '8px' }}>{label}</span>
      <input type={type} value={value} onChange={onChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }} />
    </label>
  );
}

export default TInput;
