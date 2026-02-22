import React, { useState } from "react";
import "./BrowseStudents.css";
const studentsData = [
  { name: "XYZ Person", skills: "React Node MongoDB", project: "Web App" },
  { name: "ABC Person", skills: "Python ML Data Science", project: "AI Model" },
  { name: "PQR Person", skills: "Java Spring Boot", project: "Backend API" },
  { name: "LMN Person", skills: "UI UX Figma", project: "Design System" },
  { name: "DEF Person", skills: "C++ DSA", project: "Algorithm Tool" },
  { name: "GHI Person", skills: "Android Kotlin", project: "Mobile App" },
  { name: "JKL Person", skills: "AI NLP", project: "Chatbot" },
  { name: "MNO Person", skills: "DevOps AWS", project: "Cloud Infra" },
  { name: "RST Person", skills: "Cyber Security", project: "Security Audit" },
];

function BrowseStudents() {
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filterType, setFilterType] = useState("all");

  const filteredStudents = studentsData.filter((s) => {
    const text = search.toLowerCase();
    if (filterType === "skills") return s.skills.toLowerCase().includes(text);
    if (filterType === "projects") return s.project.toLowerCase().includes(text);

    return (
      s.name.toLowerCase().includes(text) ||
      s.skills.toLowerCase().includes(text) ||
      s.project.toLowerCase().includes(text)
    );
  });

  return (
    <div className="browse-container">
      <h1>Browse Students</h1>
      <p>Find students based on skills and projects</p>

      {/* Search + Filter */}
      <div className="search-row">
        <input
          placeholder="Search by name, skill or project"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="filter-btn"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filter
        </button>
      </div>

      {/* Filter options */}
      {showFilters && (
        <div className="filter-options">
          <button
            className={filterType === "all" ? "active" : ""}
            onClick={() => setFilterType("all")}
          >
            All
          </button>
          <button
            className={filterType === "skills" ? "active" : ""}
            onClick={() => setFilterType("skills")}
          >
            By Skills
          </button>
          <button
            className={filterType === "projects" ? "active" : ""}
            onClick={() => setFilterType("projects")}
          >
            By Projects
          </button>
        </div>
      )}

      {/* Cards */}
      <div className="students-grid">
        {filteredStudents.map((s, i) => (
          <div className="student-card" key={i}>
            <h3>{s.name}</h3>
            <p><b>Skills:</b> {s.skills}</p>
            <p><b>Project:</b> {s.project}</p>

            <div className="card-actions">
              <button>Project</button>
              <button>Message</button>
              <button className="join-btn">Join</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseStudents;
