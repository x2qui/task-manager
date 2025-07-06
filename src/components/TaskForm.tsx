import { useState, useRef } from 'react';

type Props = {
  onCreate: (task: FormData) => void;
};

export default function TaskForm({ onCreate }: Props) {
  const [form, setForm] = useState({
    title: '',
    caseNumber: '',
    description: '',
    dueDate: '',
    status: 'open',
  });

  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {

    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    if (file) data.append('file', file);

    onCreate(data);

    // Reset form
    setForm({ title: '', caseNumber: '', description: '', dueDate: '', status: 'open' });
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <h3 className="font-semibold mb-2">+ Create Task</h3>
      <p className="text-sm text-gray-500 mb-3">Use this tab to create a new case task for the team</p>

      <input
        className="mb-2 w-full border p-2 rounded"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <input
        className="mb-2 w-full border p-2 rounded"
        name="caseNumber"
        placeholder="Case Number"
        value={form.caseNumber}
        onChange={handleChange}
        required
      />
      <textarea
        className="mb-2 w-full border p-2 rounded"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <label className="text-sm text-gray-600 mb-1 block">Due Date</label>
        <input
          className="mb-2 w-full border p-2 rounded"
          type="datetime-local"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
          required
        />

      <label className="text-sm text-gray-600 mb-1 block">Status</label>
      <select
        className="mb-2 w-full border p-2 rounded"
        name="status"
        value={form.status}
        onChange={handleChange}
      >
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <input
        type="file"
        onChange={e => setFile(e.target.files?.[0] ?? null)}
        className="mb-3 w-full border p-2 rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Create Task
      </button>
    </form>
  );
}
