import React, { useState } from "react";
import Input from "./componants/input";
import TodoItem from "./componants/todoitem";

const App = () => {
  const [items, setItems] = useState([]);

  const additems = (iT) => {
    setItems((prevItems) => {
      return [...prevItems, iT];
    });
  };
  const DelItem = (Di) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return Di !== index;
      });
    });
  };

  console.log(items);
  return (
    <div className="main">
      <div className="container">
        <div className="heading">
          <h1>To Do List</h1>
        </div>
        <Input additems={additems} />
        <div>
          <ul>
            {items.map((item, index) => {
              return (
                <TodoItem
                  text={item}
                  key={index}
                  DelItem={DelItem}
                  id={index}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
