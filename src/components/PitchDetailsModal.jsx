export default function PitchDetailsModal({ pitch, onClose }) {
  if (!pitch) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        
        <h2 className="text-xl font-semibold mb-3">
          {pitch.title}
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          {pitch.description}
        </p>

        <p className="text-sm text-gray-500 mb-2">
          Required Skills:
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {pitch.skills.map((skill, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-gray-100"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="text-xs text-gray-400 mb-4">
          Identity will be revealed after acceptance.
        </p>

        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}
