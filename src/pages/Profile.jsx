// // src/pages/Profile.jsx

// import { useState } from "react";

// const Profile = () => {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     bio: "",
//     year: "",
//     major: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [skill, setSkill] = useState("");
//   const [level, setLevel] = useState("Beginner");
//   const [skills, setSkills] = useState([]);
//   const [photo, setPhoto] = useState(null);

//   const validate = () => {
//     const newErrors = {};

//     if (!form.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

//     if (!form.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
//       newErrors.email = "Invalid email format";
//     }

//     if (!form.mobile.trim()) {
//       newErrors.mobile = "Mobile number is required";
//     } else if (!/^\d{10}$/.test(form.mobile)) {
//       newErrors.mobile = "Mobile must be exactly 10 digits";
//     }

//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "mobile") {
//       const onlyNumbers = value.replace(/\D/g, "");
//       setForm({ ...form, [name]: onlyNumbers });
//       return;
//     }

//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = () => {
//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       alert("Profile saved successfully!");
//     }
//   };

//   const addSkill = () => {
//     if (!skill.trim()) return;
//     setSkills([...skills, { skill, level }]);
//     setSkill("");
//   };

//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) setPhoto(URL.createObjectURL(file));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-pink-100 flex justify-center items-start p-8">
//       <div className="w-full max-w-4xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-gray-200">

//         <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
//           ✨ My Profile
//         </h2>

//         {/* Profile Photo */}
//         <div className="flex items-center gap-8 mb-10">
//           <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 overflow-hidden shadow-lg ring-4 ring-indigo-200 flex items-center justify-center">
//             {photo ? (
//               <img src={photo} alt="Profile" className="w-full h-full object-cover" />
//             ) : (
//               <span className="text-gray-500 text-sm">No Photo</span>
//             )}
//           </div>

//           <label className="cursor-pointer">
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handlePhotoUpload}
//               className="hidden"
//             />
//             <span className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium shadow-md hover:bg-indigo-700 hover:scale-105 transition-transform">
//               Upload Photo
//             </span>
//           </label>
//         </div>

//         <h3 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
//           Basic Information
//         </h3>

//         {/* First & Last Name */}
//         <div className="grid grid-cols-2 gap-6 mb-6">
//           <div>
//             <label htmlFor="firstName" className="block text-sm font-medium mb-1">
//               First Name
//             </label>
//             <input
//               id="firstName"
//               name="firstName"
//               value={form.firstName}
//               onChange={handleChange}
//               placeholder="Enter first name"
//               className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
//             />
//             {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
//           </div>

//           <div>
//             <label htmlFor="lastName" className="block text-sm font-medium mb-1">
//               Last Name
//             </label>
//             <input
//               id="lastName"
//               name="lastName"
//               value={form.lastName}
//               onChange={handleChange}
//               placeholder="Enter last name"
//               className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
//             />
//             {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
//           </div>
//         </div>

//         {/* Email & Mobile */}
//         <div className="grid grid-cols-2 gap-6 mb-6">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium mb-1">
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="example@email.com"
//               className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
//             />
//             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//           </div>

//           <div>
//             <label htmlFor="mobile" className="block text-sm font-medium mb-1">
//               Mobile Number
//             </label>
//             <input
//               id="mobile"
//               name="mobile"
//               type="tel"
//               value={form.mobile}
//               onChange={handleChange}
//               maxLength="10"
//               placeholder="10-digit mobile number"
//               className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
//             />
//             {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
//           </div>
//         </div>

//         {/* Bio */}
//         <div className="mb-8">
//           <label htmlFor="bio" className="block text-sm font-medium mb-1">
//             Bio
//           </label>
//           <textarea
//             id="bio"
//             name="bio"
//             rows="4"
//             value={form.bio}
//             onChange={handleChange}
//             placeholder="Write something about yourself..."
//             className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
//           />
//         </div>

//         {/* Year & Major */}
//         <div className="grid grid-cols-2 gap-6 mb-10">
//           <div>
//             <label htmlFor="year" className="block text-sm font-medium mb-1">
//               Year
//             </label>
//             <input
//               id="year"
//               name="year"
//               value={form.year}
//               onChange={handleChange}
//               placeholder="e.g. 3rd Year"
//               className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
//             />
//           </div>

//           <div>
//             <label htmlFor="major" className="block text-sm font-medium mb-1">
//               Major
//             </label>
//             <input
//               id="major"
//               name="major"
//               value={form.major}
//               onChange={handleChange}
//               placeholder="e.g. Computer Engineering"
//               className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
//             />
//           </div>
//         </div>

//         {/* Skills */}
//         <h3 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
//           Skills
//         </h3>

//         <div className="flex gap-3 mb-6">
//           <input
//             value={skill}
//             onChange={(e) => setSkill(e.target.value)}
//             placeholder="Enter a skill"
//             className="flex-1 border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
//           />

//           <select
//             value={level}
//             onChange={(e) => setLevel(e.target.value)}
//             className="border rounded-xl px-4 py-2 shadow-sm"
//           >
//             <option>Beginner</option>
//             <option>Intermediate</option>
//             <option>Advanced</option>
//           </select>

//           <button
//             onClick={addSkill}
//             className="bg-green-600 text-white px-5 py-2 rounded-xl font-medium shadow-md hover:bg-green-700 hover:scale-105 transition-transform"
//           >
//             Add
//           </button>
//         </div>

//         <div className="flex flex-wrap gap-3 mb-10">
//           {skills.map((s, index) => (
//             <span
//               key={index}
//               className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-200 transition"
//             >
//               {s.skill} • {s.level}
//             </span>
//           ))}
//         </div>

//         <button
//           onClick={handleSubmit}
//           className="w-full bg-indigo-600 text-white py-3 rounded-2xl font-semibold shadow-lg hover:bg-indigo-700 hover:scale-[1.02] transition-transform"
//         >
//           Save Profile
//         </button>

//       </div>
//     </div>
//   );
// };

// export default Profile;

// src/pages/Profile.jsx

import { useState } from "react";

const Profile = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    bio: "",
    year: "",
    major: "",
  });

  const [errors, setErrors] = useState({});
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [skills, setSkills] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(form.mobile)) {
      newErrors.mobile = "Mobile must be exactly 10 digits";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const onlyNumbers = value.replace(/\D/g, "");
      setForm({ ...form, [name]: onlyNumbers });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Profile saved successfully!");
    }
  };

  const addSkill = () => {
    if (!skill.trim()) return;
    setSkills([...skills, { skill, level }]);
    setSkill("");
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-pink-100 flex justify-center items-start p-8">
      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-gray-200">

        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
          ✨ My Profile
        </h2>

        {/* Profile Photo */}
        <div className="flex items-center gap-8 mb-10">
          <div
            onClick={() => photo && setShowPreview(true)}
            className="w-32 h-32 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 overflow-hidden shadow-lg ring-4 ring-indigo-200 flex items-center justify-center cursor-pointer hover:scale-105 transition"
          >
            {photo ? (
              <img src={photo} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-500 text-sm">No Photo</span>
            )}
          </div>

          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />
            <span className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium shadow-md hover:bg-indigo-700 hover:scale-105 transition-transform">
              Upload Photo
            </span>
          </label>
        </div>

        <h3 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
          Basic Information
        </h3>

        {/* First & Last Name */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-1">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-1">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
            />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>

        {/* Email & Mobile */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm font-medium mb-1">
              Mobile Number
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              value={form.mobile}
              onChange={handleChange}
              maxLength="10"
              placeholder="10-digit mobile number"
              className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
            />
            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
          </div>
        </div>

        {/* Bio */}
        <div className="mb-8">
          <label htmlFor="bio" className="block text-sm font-medium mb-1">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            rows="4"
            value={form.bio}
            onChange={handleChange}
            placeholder="Write something about yourself..."
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
          />
        </div>

        {/* Year & Major */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          <div>
            <label htmlFor="year" className="block text-sm font-medium mb-1">
              Year
            </label>
            <input
              id="year"
              name="year"
              value={form.year}
              onChange={handleChange}
              placeholder="e.g. 3rd Year"
              className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="major" className="block text-sm font-medium mb-1">
              Major
            </label>
            <input
              id="major"
              name="major"
              value={form.major}
              onChange={handleChange}
              placeholder="e.g. Computer Engineering"
              className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
            />
          </div>
        </div>

        {/* Skills */}
        <h3 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
          Skills
        </h3>

        <div className="flex gap-3 mb-6">
          <input
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="Enter a skill"
            className="flex-1 border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
          />

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="border rounded-xl px-4 py-2 shadow-sm"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <button
            onClick={addSkill}
            className="bg-green-600 text-white px-5 py-2 rounded-xl font-medium shadow-md hover:bg-green-700 hover:scale-105 transition-transform"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {skills.map((s, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-200 transition"
            >
              {s.skill} • {s.level}
            </span>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 text-white py-3 rounded-2xl font-semibold shadow-lg hover:bg-indigo-700 hover:scale-[1.02] transition-transform"
        >
          Save Profile
        </button>

        {/* Image Preview Modal */}
        {showPreview && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowPreview(false)}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={photo}
                alt="Preview"
                className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl"
              />

              <button
                onClick={() => setShowPreview(false)}
                className="absolute -top-3 -right-3 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-lg hover:scale-110"
              >
                ✕
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Profile;