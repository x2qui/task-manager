type Props = {
  query: string;
  onSearch: (value: string) => void;
};

export default function SearchBar({ query, onSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Search by case number or ID"
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      className="w-full p-2 border rounded mb-4"
    />
  );
}
