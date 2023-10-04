function TaskName({ description, complete }) {
  return (
    <div>
      <p className={`${complete ? "complete" : ""} task-name`}>{description}</p>
    </div>
  );
}

export default TaskName;
