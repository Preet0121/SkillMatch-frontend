// import { useState } from "react";
// import pitchesData from "../data/pitches";
// import PitchCard from "../components/PitchCard";
// import PitchDetailsModal from "../components/PitchDetailsModal";
// import CreatePitchModal from "../components/CreatePitchModal";

// export default function Pitches() {
//   const [pitches, setPitches] = useState(pitchesData);
//   const [selectedPitch, setSelectedPitch] = useState(null);
//   const [showCreate, setShowCreate] = useState(false);

//   // STEP 1: search & filter state
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedSkills, setSelectedSkills] = useState([]);
//   const [showFilter, setShowFilter] = useState(false);

//   // STEP 3: filtering logic
//   const filteredPitches = pitches.filter((pitch) => {
//     const matchesSearch =
//       pitch.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       pitch.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       pitch.skills.some((skill) =>
//         skill.toLowerCase().includes(searchTerm.toLowerCase())
//       );

//     const matchesSkills =
//       selectedSkills.length === 0 ||
//       selectedSkills.every((skill) => pitch.skills.includes(skill));

//     return matchesSearch && matchesSkills;
//   });

//   function handleCreate(newPitch) {
//     setPitches([newPitch, ...pitches]);
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-8">
      
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
//         <div>
//           <h2 className="text-2xl font-bold text-gray-900">
//             Pitches
//           </h2>
//           <p className="text-sm text-gray-500">
//             Share ideas anonymously and find collaborators
//           </p>
//         </div>

//         <button
//           onClick={() => setShowCreate(true)}
//           className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-lg font-medium shadow-sm"
//         >
//           + Create Pitch
//         </button>
//       </div>

//       {/* STEP 2: Search & Filter UI */}
//       <div className="flex flex-col sm:flex-row gap-4 mb-8">
//         <input
//           type="text"
//           placeholder="Search pitches..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full sm:w-72 border border-gray-300 rounded-lg px-3 py-2 text-sm
//                     focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <div className="relative">
//           <button
//             onClick={() => setShowFilter(!showFilter)}
//             className="border border-gray-300 rounded-lg px-4 py-2 text-sm
//                        flex items-center gap-2 hover:bg-gray-50"
//           >
//             Filter
//             <span className="text-xs">▾</span>
//           </button>

//           {showFilter && (
//             <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4 z-20">
      
//               {/* Skills */}
//               <div className="mb-4">
//                 <p className="text-sm font-medium mb-2">Skills</p>
//                 {["Python", "Java", "React", "AI", "Spring Boot", "MySQL"].map(skill => (
//                   <label key={skill} className="flex items-center gap-2 text-sm mb-1">
//                     <input
//                       type="checkbox"
//                       checked={selectedSkills.includes(skill)}
//                       onChange={(e) => {
//                         if (e.target.checked) {
//                           setSelectedSkills([...selectedSkills, skill]);
//                         } else {
//                           setSelectedSkills(
//                             selectedSkills.filter(s => s !== skill)
//                           );
//                         }
//                       }}
//                     />
//                     {skill}
//                   </label>
//                 ))}
//               </div>

//               {/* Idea Type (UI only for now) */}
//               <div className="mb-2">
//                 <p className="text-sm font-medium mb-2">Idea Type</p>
//                 <label className="flex items-center gap-2 text-sm">
//                   <input type="checkbox" disabled /> Academic
//                 </label>
//                 <label className="flex items-center gap-2 text-sm">
//                   <input type="checkbox" disabled /> Startup
//                 </label>
//               </div>

//             </div>
//           )}
//         </div>

//       </div>

//       {/* Pitches Grid / Empty State */}
//       {filteredPitches.length === 0 ? (
//         <div className="text-center py-20 text-gray-500">
//           <p className="text-lg font-medium">
//             No matching pitches found
//           </p>
//           <p className="text-sm mt-2">
//             Try a different search or filter 🚀
//           </p>
//         </div>
//       ) : (
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredPitches.map((pitch) => (
//             <PitchCard
//               key={pitch.id}
//               pitch={pitch}
//               onView={setSelectedPitch}
//             />
//           ))}
//         </div>
//       )}

//       {selectedPitch && (
//         <PitchDetailsModal
//           pitch={selectedPitch}
//           onClose={() => setSelectedPitch(null)}
//         />
//       )}

//       {showCreate && (
//         <CreatePitchModal
//           onCreate={handleCreate}
//           onClose={() => setShowCreate(false)}
//         />
//       )}
//     </div>
//   );
// }





import { useState } from "react";
import pitchesData from "../data/pitches";
import PitchCard from "../components/PitchCard";
import PitchDetailsModal from "../components/PitchDetailsModal";
import CreatePitchModal from "../components/CreatePitchModal";


export default function Pitches() {
  const [pitches, setPitches] = useState(pitchesData);
  const [selectedPitch, setSelectedPitch] = useState(null);
  const [showCreate, setShowCreate] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const filteredPitches = pitches.filter((pitch) => {
    const matchesSearch =
      pitch.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pitch.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pitch.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesSkills =
      selectedSkills.length === 0 ||
      selectedSkills.every((skill) => pitch.skills.includes(skill));

    return matchesSearch && matchesSkills;
  });

  function handleCreate(newPitch) {
    setPitches([newPitch, ...pitches]);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Pitches
            </h2>
            <p className="text-sm text-gray-400">
              Share ideas anonymously and find collaborators
            </p>
          </div>

          <button
            onClick={() => setShowCreate(true)}
            className="bg-cyan-500 hover:bg-cyan-400 transition duration-300
                       text-black px-5 py-2 rounded-lg font-medium
                       shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40"
          >
            + Create Pitch
          </button>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">

          <input
            type="text"
            placeholder="Search pitches..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-72 bg-white/5 border border-white/10
                       rounded-xl px-4 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-cyan-500
                       transition duration-300 placeholder:text-gray-500"
          />

          <div className="relative">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="border border-white/10 bg-white/5 rounded-xl px-4 py-2 text-sm
                         flex items-center gap-2 hover:border-cyan-400
                         hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]
                         transition duration-300"
            >
              Filter
              <span className="text-xs">▾</span>
            </button>

            {showFilter && (
              <div className="absolute right-0 mt-3 w-64
                              bg-[#020617] border border-white/10
                              rounded-xl shadow-2xl p-4 z-20
                              backdrop-blur">

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2 text-gray-300">
                    Skills
                  </p>

                  {["Python", "Java", "React", "AI", "Spring Boot", "MySQL"].map(skill => (
                    <label key={skill} className="flex items-center gap-2 text-sm mb-1 text-gray-400">
                      <input
                        type="checkbox"
                        className="accent-cyan-400"
                        checked={selectedSkills.includes(skill)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedSkills([...selectedSkills, skill]);
                          } else {
                            setSelectedSkills(
                              selectedSkills.filter(s => s !== skill)
                            );
                          }
                        }}
                      />
                      {skill}
                    </label>
                  ))}

                </div>

                {/* Idea Type */}
                <div className="mb-2">
                  <p className="text-sm font-medium mb-2 text-gray-300">
                    Idea Type
                  </p>

                  <label className="flex items-center gap-2 text-sm text-gray-500">
                    <input type="checkbox" disabled />
                    Academic
                  </label>

                  <label className="flex items-center gap-2 text-sm text-gray-500">
                    <input type="checkbox" disabled />
                    Startup
                  </label>
                </div>

              </div>
            )}
          </div>

        </div>

        {/* Grid */}
        {filteredPitches.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg font-medium">
              No matching pitches found
            </p>
            <p className="text-sm mt-2">
              Try a different search or filter 🚀
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPitches.map((pitch) => (
              <PitchCard
                key={pitch.id}
                pitch={pitch}
                onView={setSelectedPitch}
              />
            ))}
          </div>
        )}

        {selectedPitch && (
          <PitchDetailsModal
            pitch={selectedPitch}
            onClose={() => setSelectedPitch(null)}
          />
        )}

        {showCreate && (
          <CreatePitchModal
            onCreate={handleCreate}
            onClose={() => setShowCreate(false)}
          />
        )}

      </div>
    </div>
  );
}