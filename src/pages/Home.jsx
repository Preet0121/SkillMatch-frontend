// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="max-w-7xl mx-auto px-6 py-8">

//       {/* Welcome Section */}
//       <div className="mb-10">
//         <h1 className="text-3xl font-bold text-gray-900">
//           Welcome to SkillMatch 
//         </h1>
//         <p className="text-gray-600 mt-2">
//           Connect with students, pitch ideas, and build projects together.
//         </p>
//       </div>

//       {/* Global Search */}
//       <div className="mb-10">
//         <input
//           type="text"
//           placeholder="Search skills, projects, or students..."
//           className="w-full sm:w-96 border border-gray-300 rounded-lg px-4 py-2
//                      focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Quick Actions */}
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">

//         <Link
//           to="/pitches"
//           className="bg-white border rounded-xl p-6 hover:shadow-lg
//                      transition cursor-pointer"
//         >
//           <h3 className="text-lg font-semibold mb-2">
//             Browse Pitches
//           </h3>
//           <p className="text-sm text-gray-500">
//             Explore ideas and find teammates.
//           </p>
//         </Link>

//         <Link
//           to="/messages"
//           className="bg-white border rounded-xl p-6 hover:shadow-lg
//                      transition cursor-pointer"
//         >
//           <h3 className="text-lg font-semibold mb-2">
//             Messages
//           </h3>
//           <p className="text-sm text-gray-500">
//             Chat with collaborators.
//           </p>
//         </Link>

//         <div
//           className="bg-white border rounded-xl p-6 opacity-70 cursor-not-allowed"
//         >
//           <h3 className="text-lg font-semibold mb-2">
//             Find Students
//           </h3>
//           <p className="text-sm text-gray-500">
//             Coming soon
//           </p>
//         </div>

//       </div>

//       {/* Recent Activity */}
//       <div>
//         <h2 className="text-xl font-semibold mb-4">
//           Recent Activity
//         </h2>

//         <div className="bg-white border rounded-xl p-4">
//           <p className="text-sm text-gray-500">
//             You recently viewed an AI-based Attendance System pitch.
//           </p>
//         </div>
//       </div>

//     </div>
//   );
// }





// import { useNavigate } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="dashboard">

//       {/* Top Bar */}
//       <div className="topbar">
//         <h2>SkillMatch</h2>
//         <div>
//           <button onClick={() => navigate("/profile")}>Profile</button>
//           <button onClick={() => navigate("/")}>Logout</button>
//         </div>
//       </div>

//       {/* Welcome */}
//       <h3 className="welcome">Welcome 👋</h3>

//       {/* Search */}
//       <input 
//         className="search"
//         placeholder="Search by skills, students, project, etc..."
//       />

//       {/* Main Feature Buttons */}
//       <div className="card-container">
//         <div className="card" onClick={() => navigate("/browse-students")}>
//           Browse Students
//         </div>
//         <div className="card" onClick={() => navigate("/browse-projects")}>
//           Projects
//         </div>
//         <div className="card" onClick={() => navigate("/messages")}>
//           Message
//         </div>
//         <div className="card" onClick={() => navigate("/pitches")}>
//           Pitches
//         </div>
//         <div className="card" onClick={() => navigate("/achievements")}>
//           Achievements
//         </div>
//       </div>

//       {/* My Projects Section */}
//       <h3>My Projects</h3>
//       <div className="projects">
//         <div className="project-box">
//           SkillMatch (Ongoing)
//         </div>
//         <div className="project-box">
//           Backend (Completed)
//         </div>
//       </div>

//       {/* Friends Section */}
//       <h3>Friends</h3>
//       <div className="friends">
//         <div className="friend">XYZ</div>
//       </div>

//     </div>
//   );
// }

// export default Home;











// import { Link, useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gray-50">

//       {/* Top Navbar */}
//       <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
//         <h2 className="text-xl font-bold text-blue-600">
//           SkillMatch
//         </h2>

//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => navigate("/profile")}
//             className="text-sm font-medium text-gray-600 hover:text-blue-600"
//           >
//             Profile
//           </button>

//           <button
//             onClick={() => navigate("/")}
//             className="text-sm bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-8">

//         {/* Welcome Section */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">
//             Welcome 👋
//           </h1>
//           <p className="text-gray-600 mt-1">
//             Connect with students, pitch ideas, and build projects together.
//           </p>
//         </div>

//         {/* Search */}
//         <div className="mb-10">
//           <input
//             type="text"
//             placeholder="Search by skills, students, projects..."
//             className="w-full md:w-2/3 border border-gray-300 rounded-lg px-4 py-3
//                        focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
//           />
//         </div>

//         {/* Quick Action Cards */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 mb-12">

//           <Link
//             to="/browse-students"
//             className="bg-white border rounded-xl p-6 text-center hover:shadow-lg transition"
//           >
//             <h3 className="font-semibold">Browse Students</h3>
//           </Link>

//           <Link
//             to="/browse-projects"
//             className="bg-white border rounded-xl p-6 text-center hover:shadow-lg transition"
//           >
//             <h3 className="font-semibold">Projects</h3>
//           </Link>

//           <Link
//             to="/messages"
//             className="bg-white border rounded-xl p-6 text-center hover:shadow-lg transition"
//           >
//             <h3 className="font-semibold">Messages</h3>
//           </Link>

//           <Link
//             to="/pitches"
//             className="bg-white border rounded-xl p-6 text-center hover:shadow-lg transition"
//           >
//             <h3 className="font-semibold">Pitches</h3>
//           </Link>

//           <Link
//             to="/achievements"
//             className="bg-white border rounded-xl p-6 text-center hover:shadow-lg transition"
//           >
//             <h3 className="font-semibold">Achievements</h3>
//           </Link>

//         </div>

//         {/* My Projects */}
//         <div className="mb-10">
//           <h2 className="text-xl font-semibold mb-4">
//             My Projects
//           </h2>

//           <div className="grid sm:grid-cols-2 gap-6">
//             <div className="bg-white border rounded-xl p-6 shadow-sm">
//               <h3 className="font-semibold text-lg">
//                 SkillMatch
//               </h3>
//               <p className="text-sm text-gray-500">
//                 Status: Ongoing
//               </p>
//             </div>

//             <div className="bg-white border rounded-xl p-6 shadow-sm">
//               <h3 className="font-semibold text-lg">
//                 Backend API
//               </h3>
//               <p className="text-sm text-gray-500">
//                 Status: Completed
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Friends Section */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">
//             Friends
//           </h2>

//           <div className="bg-white border rounded-xl p-6 shadow-sm">
//             <p className="text-gray-700">XYZ</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }




import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 transition-all duration-300 ease-in-out">

      {/* Top Navbar */}
      <div className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-8 py-4 flex justify-between items-center shadow-lg">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide">
          SkillMatch
        </h2>

        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/profile")}
            className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-all duration-300 ease-in-out"
          >
            Profile
          </button>

          <button
            onClick={() => navigate("/")}
            className="text-sm bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 rounded-xl
                       hover:shadow-lg hover:shadow-red-500/30 hover:scale-105
                       transition-all duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-14">

        {/* Welcome Section */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Welcome 👋
          </h1>
          <p className="text-slate-400 mt-4 text-lg">
            Connect with students, pitch ideas, and build projects together.
          </p>
        </div>

        {/* Search */}
        <div className="mb-16">
          <input
            type="text"
            placeholder="Search by skills, students, projects..."
            className="w-full md:w-2/3 bg-slate-900 border border-slate-800 rounded-2xl px-6 py-3
                       text-slate-200 placeholder-slate-500
                       focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500
                       transition-all duration-300 ease-in-out shadow-md"
          />
        </div>

        {/* Quick Action Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 mb-20">

          <Link
            to="/browse-students"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center
                       hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20
                       transform hover:-translate-y-2
                       transition-all duration-300 ease-in-out"
          >
            <h3 className="font-semibold text-slate-200 text-lg">
              Browse Students
            </h3>
          </Link>

          <Link
            to="/browse-projects"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center
                       hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20
                       transform hover:-translate-y-2
                       transition-all duration-300 ease-in-out"
          >
            <h3 className="font-semibold text-slate-200 text-lg">
              Projects
            </h3>
          </Link>

          <Link
            to="/messages"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center
                       hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20
                       transform hover:-translate-y-2
                       transition-all duration-300 ease-in-out"
          >
            <h3 className="font-semibold text-slate-200 text-lg">
              Messages
            </h3>
          </Link>

          <Link
            to="/pitches"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center
                       hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20
                       transform hover:-translate-y-2
                       transition-all duration-300 ease-in-out"
          >
            <h3 className="font-semibold text-slate-200 text-lg">
              Pitches
            </h3>
          </Link>

          <Link
            to="/achievements"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center
                       hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20
                       transform hover:-translate-y-2
                       transition-all duration-300 ease-in-out"
          >
            <h3 className="font-semibold text-slate-200 text-lg">
              Achievements
            </h3>
          </Link>

        </div>

        {/* My Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-slate-100">
            My Projects
          </h2>

          <div className="grid sm:grid-cols-2 gap-10">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8
                            hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20
                            transition-all duration-300 ease-in-out">
              <h3 className="font-semibold text-xl text-slate-200">
                SkillMatch
              </h3>
              <p className="text-sm text-cyan-400 mt-3">
                Status: Ongoing
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8
                            hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20
                            transition-all duration-300 ease-in-out">
              <h3 className="font-semibold text-xl text-slate-200">
                Backend API
              </h3>
              <p className="text-sm text-emerald-400 mt-3">
                Status: Completed
              </p>
            </div>
          </div>
        </div>

        {/* Friends Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-slate-100">
            Friends
          </h2>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8
                          hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20
                          transition-all duration-300 ease-in-out">
            <p className="text-slate-300 text-lg">
              XYZ
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}