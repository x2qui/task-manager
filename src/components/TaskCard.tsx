import { Task } from '../types/Task';

type Props = {
  task: Task;
  onDelete: (id: string) => void;
  onStatusClick: (id: string) => void;
};

const statusColors: Record<string, string> = {
  open: 'bg-blue-100 text-blue-700',
  'in-progress': 'bg-yellow-100 text-yellow-800',
  completed: 'bg-green-100 text-green-800',
};

export default function TaskCard({ task, onDelete, onStatusClick }: Props) {
  return (
    <div className="bg-white rounded-lg p-4 shadow mb-4">
      <div className="mb-2">
        <h3 className="font-bold text-sm">Task Title: {task.title}</h3>
        <p className="text-sm"><strong>Case Number:</strong> {task.caseNumber}</p>
        <p className="text-sm">{task.description}</p>
        <p className="text-sm mt-1"><strong>Due Date:</strong> {new Date(task.dueDate).toLocaleDateString()}</p>
        {task.attachment && (
          <p className="text-sm mt-1 text-gray-500">
            1 attached file –{' '}
            <a
              href={`http://localhost:4000/tasks/${task.id}/download`}
              className="underline text-blue-600"
              download
            >
              Download
            </a>
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={() => onStatusClick(task.id)}
          className={`text-xs px-3 py-1 rounded-full cursor-pointer ${statusColors[task.status]}`}
        >
          {task.status}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}
