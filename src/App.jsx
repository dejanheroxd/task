import { useState } from "react";
import { TodoCreator, ItemControl } from "./index";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState("");
  console.log(description);

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleInputField(value) {
    setDescription(value);
  }

  function handleAddItem() {
    if (!description) return;

    const newTodo = { description, id: uuidv4() };

    setDescription("");
    setItems((items) => [...items, newTodo]);
  }

  return (
    <div className="todo-app">
      <div className="todo-app-container">
        <div className="todo-creator">
          <TodoCreator
            description={description}
            inputChange={handleInputField}
            handleAddItem={handleAddItem}
          />
        </div>
        <div className="item-control">
          <ItemControl items={items} onDeleteItem={handleDeleteItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
