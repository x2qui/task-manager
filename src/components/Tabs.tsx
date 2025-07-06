// src/components/Tabs.tsx
type Props = {
  active: string;
  onChange: (status: string) => void;
};

export default function Tabs({ active, onChange }: Props) {
  const statuses = ['All Cases', 'Open Cases', 'In progress', 'Completed'];

  return (
    <div className="flex gap-4 mb-4 text-sm font-medium text-gray-700">
      {statuses.map(status => (
        <button
          key={status}
          onClick={() => onChange(status)}
          className={`px-3 py-1 rounded ${
            active === status ? 'bg-blue-600 text-white' : 'bg-white border'
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  );
}
