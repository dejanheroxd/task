import Checkbox from "./Checkbox";
import TaskName from "./TaskName";
import DeleteBtn from "./DeleteBtn";
import { useState } from "react";

function Item({ item, onDeleteItem }) {
  const [complete, setComplete] = useState(false);

  function handleComplete() {
    setComplete((prev) => !prev);
  }

  return (
    <div className="item-c-real">
      <Checkbox onComplete={handleComplete} />
      <TaskName complete={complete} description={item.description} />
      <DeleteBtn onDeleteItem={onDeleteItem} itemId={item.id} />
    </div>
  );
}

export default Item;
