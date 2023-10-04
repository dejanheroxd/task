function Checkbox({ onComplete }) {
  return (
    <div>
      <input
        onClick={() => onComplete()}
        className="checkbox"
        type="checkbox"
      />
    </div>
  );
}

export default Checkbox;
