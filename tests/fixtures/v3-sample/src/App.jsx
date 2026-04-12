// Sample v3 component with patterns that need migration to v4
export function Card({ title, description, variant }) {
  return (
    <div className="transform hover:scale-105 transition-transform rounded shadow-sm border bg-white">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 text-opacity-80">{description}</p>
      </div>
      <div className="border-t px-6 py-4 flex space-x-3">
        <button className="!px-4 !py-2 bg-blue-500 text-white rounded outline-none focus:ring">
          Action
        </button>
        <button className="px-4 py-2 text-gray-600 hover:text-gray-900 outline-none">
          Cancel
        </button>
      </div>
    </div>
  );
}

export function Badge({ color, children }) {
  // Anti-pattern: dynamic class construction
  return (
    <span className={`bg-${color}-100 text-${color}-800 rounded-sm px-2 py-0.5 text-xs font-medium`}>
      {children}
    </span>
  );
}

export function Input({ label, error }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        className="mt-1 block w-full rounded border shadow-sm focus:ring focus:border-blue-500 outline-none"
        style={{ color: "var(--text-color)" }}
      />
      {error && <p className="mt-1 text-sm text-red-600 bg-red-50 bg-opacity-50 rounded px-2 py-1">{error}</p>}
    </div>
  );
}
