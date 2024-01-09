import { FaCheckCircle, FaCircle } from "react-icons/fa";

export const TodoItem = ({ task, index, Function }) => {
    return (
      <div
        className={`todo-item-container ${task.isCheck ? "done" : ""}`}
        key={index}
      >
        {task.isCheck ? (
          <FaCheckCircle
            className="item-done-button"
            color="#9a9a9a"
            onClick={() => Function(index)}
          />
        ) : (
          <FaCircle
            className="item-done-button"
            color="#9a9a9a"
            onClick={() => Function(index)}
          />
        )}
        <div className="item-title">{task.value}</div>
      </div>
    );
  };