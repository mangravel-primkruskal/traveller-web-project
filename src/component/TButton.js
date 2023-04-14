import React from 'react';
import { useHistory } from 'react-router-dom';

function TButton(props) {
  const { text, onClick, linkTo } = props;
  const history = useHistory();

  const handleClick = () => {

    //admin için mekan sahibi oluşturma özelliği gerekir, 
    if (linkTo) {
      history.push(linkTo);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '4px', padding: '8px 16px', cursor: 'pointer', transition: 'background-color 0.2s' }}>
      {text}
    </button>
  );
}

export default TButton;

