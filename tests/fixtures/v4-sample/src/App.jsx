// Sample v4 component with correct patterns
export function Card({ title, description }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-xs transition-transform hover:scale-105 dark:border-gray-800 dark:bg-gray-900">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="mt-2 text-gray-600/80 dark:text-gray-400/80">{description}</p>
      </div>
      <div className="flex gap-3 border-t border-gray-200 px-6 py-4 dark:border-gray-800">
        <button className="cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-white shadow-xs hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden">
          Action
        </button>
        <button className="cursor-pointer rounded-sm px-4 py-2 text-gray-600 hover:text-gray-900 focus-visible:outline-hidden dark:text-gray-400 dark:hover:text-gray-100">
          Cancel
        </button>
      </div>
    </div>
  );
}

export function Badge({ variant, children }) {
  // Correct: static class name map
  const styles = {
    success: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    error: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <span className={`${styles[variant]} rounded-xs px-2 py-0.5 text-xs font-medium`}>
      {children}
    </span>
  );
}

export function Input({ label, error }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
      <input
        className="mt-1 block w-full rounded-sm border border-gray-300 px-3 py-2 shadow-xs placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800"
      />
      {error && (
        <p className="mt-1 rounded-xs bg-red-50/50 px-2 py-1 text-sm text-red-600 dark:bg-red-950/50 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
