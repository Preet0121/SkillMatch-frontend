import { useState } from "react";

export default function PitchCard({ pitch, onView }) {
  const [requested, setRequested] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Anonymous Student
        </span>
        <button onClick={() => onView(pitch)}>
          👁
        </button>
      </div>

      <h3 className="mt-3 font-semibold text-lg text-gray-900">
        {pitch.title}
      </h3>

      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
        {pitch.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {pitch.skills.map((skill, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
          >
            {skill}
          </span>
        ))}
      </div>

      <button
        disabled={requested}
        onClick={() => setRequested(true)}
        className={`mt-4 w-full py-2 rounded-lg text-sm font-medium transition ${
          requested
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-white border border-gray-300 hover:bg-gray-50"
          }`}
      >
        {requested ? "Requested" : "Interest"}
      </button>
    </div>
  );
}
