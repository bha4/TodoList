import React from "react";

const Context = ({items,changeHandler,deleteHandler}) => {
 

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.state}
              onChange={() => changeHandler(item.id)}
            />
            <label>{item.content}</label>
            <button onClick={() => deleteHandler(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Context;
