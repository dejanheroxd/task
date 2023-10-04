import { ListName, Item } from "../../index.js";

function ItemControl({ items, onDeleteItem }) {
  return (
    <div>
      <ListName />
      <div className="item-container">
        <div className="item-container-small">
          {items.map((item) => (
            <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemControl;
