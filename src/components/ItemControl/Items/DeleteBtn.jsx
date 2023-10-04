function DeleteBtn({ onDeleteItem, itemId }) {
  return (
    <div>
      <button onClick={() => onDeleteItem(itemId)} className="delete-btn">
        Delete
      </button>
    </div>
  );
}

export default DeleteBtn;
