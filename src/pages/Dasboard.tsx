import { useEffect, useState } from 'react';
import {
  getTasks,
  createTask,
  deleteTask,
  updateStatus,
} from '../services/taskService';
import { Task } from '../types/Task';

import Header from '../components/Header';
import Tabs from '../components/Tabs';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';
import SearchBar from '../components/SearchBar';

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>('All Cases');
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleCreate = async (formData: FormData) => {
    await createTask(formData);
    loadTasks();
  };

  const handleDelete = async (id: string) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleStatusUpdate = async (id: string) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const nextStatus = getNextStatus(task.status);
    await updateStatus(id, nextStatus);
    loadTasks();
  };

  const getNextStatus = (current: string) => {
    const order = ['open', 'in-progress', 'completed'];
    const index = order.indexOf(current);
    return order[(index + 1) % order.length];
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch =
      task.caseNumber.toLowerCase().includes(search.toLowerCase()) ||
      task.id.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      filter === 'All Cases' ||
      (filter === 'Open Cases' && task.status === 'open') ||
      (filter === 'In progress' && task.status === 'in-progress') ||
      (filter === 'Completed' && task.status === 'completed');

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />
      <div className="flex gap-6">
        {/* LEFT COLUMN */}
        <div className="flex-1">
          <Tabs active={filter} onChange={setFilter} />
          {filteredTasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onStatusClick={handleStatusUpdate}
            />
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-1/3">
          <SearchBar query={search} onSearch={setSearch} />
          <TaskForm onCreate={handleCreate} />
        </div>
      </div>
    </div>
  );
}
