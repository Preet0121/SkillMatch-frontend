import { useState } from "react";

export default function CreatePitchModal({ onCreate, onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");

  function handleSubmit() {
    if (!title || !description || !skills) {
      alert("Please fill all fields");
      return;
    }

    const newPitch = {
      id: Date.now(), // backend will replace later
      title,
      description,
      skills: skills.split(",").map(s => s.trim()),
      anonymous: true,
    };

    onCreate(newPitch);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        
        <h2 className="text-xl font-semibold mb-4">
          Create New Pitch
        </h2>

        <input
          type="text"
          placeholder="Pitch title"
          className="w-full border p-2 rounded mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Idea description"
          className="w-full border p-2 rounded mb-3"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Skills (comma separated)"
          className="w-full border p-2 rounded mb-4"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <p className="text-xs text-gray-500 mb-4">
          Your identity will remain anonymous until interest is accepted.
        </p>

        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-blue-600 text-white py-2 rounded"
          >
            Create
          </button>
          <button
            onClick={onClose}
            className="flex-1 border py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
