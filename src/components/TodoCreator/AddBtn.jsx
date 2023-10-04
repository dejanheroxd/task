function AddBtn({ handleAddItem, description }) {
  const handleClick = () => {
    if (description.trim() !== "") {
      handleAddItem(description);
      console.log(description);
    }
  };

  return (
    <div className="add-btn-container">
      <button onClick={handleClick} className="add-btn">
        Add
      </button>
    </div>
  );
}

export default AddBtn;
