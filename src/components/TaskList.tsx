import React, { useEffect, useState } from 'react';
import { Task } from '../types/Task';
import { getTasks } from '../services/taskService';
import TaskItem from './TaskItem';

type Props = {
  refresh: boolean;
  onRefreshComplete: () => void;
};

const TaskList: React.FC<Props> = ({ refresh, onRefreshComplete }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (refresh) {
      getTasks().then(res => {
        setTasks(res.data);
        onRefreshComplete();
      });
    }
  }, [refresh]);

  return (
    <div>
      <h4>All Tasks</h4>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onUpdate={onRefreshComplete} />
      ))}
    </div>
  );
};

export default TaskList;