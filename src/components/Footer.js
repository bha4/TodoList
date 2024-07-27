import React from "react";

const Footer = ({ items }) => {
  const completedCount = items.filter((item) => item.state).length;
  return (
    <footer>
      <p>{`Completed tasks: ${completedCount} / ${items.length}`}</p>
    </footer>
  );
};

export default Footer;
