import React from 'react';
import { Task } from '../types/Task';
import { deleteTask, updateStatus } from '../services/taskService';

type Props = {
  task: Task;
  onUpdate: () => void;
};

const TaskItem: React.FC<Props> = ({ task, onUpdate }) => {
  const handleDelete = async () => {
    await deleteTask(task.id);
    onUpdate();
  };

  const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    await updateStatus(task.id, e.target.value);
    onUpdate();
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5>{task.title}</h5>
        {task.description && <p>{task.description}</p>}
        <p><strong>Due:</strong> {new Date(task.dueDate).toLocaleString()}</p>
        <div className="d-flex justify-content-between align-items-center">
          <select value={task.status} className="form-select w-50" onChange={handleStatusChange}>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;