function InputField({ description, inputChange }) {
  return (
    <div className="input-container">
      <input
        onChange={(e) => inputChange(e.target.value)}
        className="input-field"
        value={description}
      />
    </div>
  );
}

export default InputField;
