import React from 'react'

const Header = ({ title = "TO-DO-List" }) => {
  return (
    <div>
      <h1>{title} </h1>
    </div>
  );
};

export default Header