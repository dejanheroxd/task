import { Header, InputField, AddBtn } from "../../index.js";

function TodoCreator({ description, inputChange, handleAddItem }) {
  return (
    <>
      <Header />
      <InputField description={description} inputChange={inputChange} />
      <AddBtn handleAddItem={handleAddItem} description={description} />
    </>
  );
}

export default TodoCreator;
