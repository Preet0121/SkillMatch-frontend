// src/pages/Achievements.jsx

import { useEffect, useState } from "react";

const mockBadges = [
  {
    title: "First Task Completed",
    desc: "Complete your first task.",
    progress: 100,
    unlocked: true,
    emoji: "🎯",
  },
  {
    title: "7 Day Streak",
    desc: "Work consistently for 7 days.",
    progress: 70,
    unlocked: false,
    emoji: "🔥",
  },
  {
    title: "Task Master",
    desc: "Complete 50 tasks.",
    progress: 45,
    unlocked: false,
    emoji: "🏆",
  },
  {
    title: "Early Bird",
    desc: "Start working before 8 AM.",
    progress: 100,
    unlocked: true,
    emoji: "🌅",
  },
  {
    title: "Focus Pro",
    desc: "Complete 10 focus sessions.",
    progress: 80,
    unlocked: false,
    emoji: "🧠",
  },
  {
    title: "Legend",
    desc: "Maintain a 30-day streak.",
    progress: 20,
    unlocked: false,
    emoji: "👑",
  },
];

const Achievements = () => {
  const [badges, setBadges] = useState(mockBadges);
  const [stats, setStats] = useState({
    badgesEarned: mockBadges.filter((b) => b.unlocked).length,
    streak: 5,
  });
  const [filter, setFilter] = useState("all");

  const userId = "65ab12xyz";

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/achievements/${userId}`
        );
        const data = await res.json();

        if (data?.badges?.length) {
          setBadges(data.badges);
          setStats({
            badgesEarned: data.badgesEarned,
            streak: data.streak,
          });
        }
      } catch {
        console.log("Using mock achievements");
      }
    };

    fetchAchievements();
  }, []);

  const filteredBadges = badges.filter((badge) => {
    if (filter === "unlocked") return badge.unlocked;
    if (filter === "locked") return !badge.unlocked;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-pink-100 flex justify-center items-start p-8">
      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-gray-200">

        <h2 className="text-4xl font-extrabold text-gray-800 mb-2 tracking-wide">
          🏆 Achievements
        </h2>
        <p className="text-gray-600 mb-8">Track your work progress</p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-lg border p-6 flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Badges earned</p>
              <h3 className="text-3xl font-bold text-indigo-600">
                {stats.badgesEarned}
              </h3>
            </div>
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 font-bold">
              🏅
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border p-6 flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Streak</p>
              <h3 className="text-3xl font-bold text-green-600">
                {stats.streak}
              </h3>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 font-bold">
              🔥
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 border-b pb-2">
            All Badges
          </h3>

          <div className="flex gap-3">
            {["all", "unlocked", "locked"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium shadow transition ${
                  filter === type
                    ? "bg-indigo-600 text-white"
                    : "bg-white border text-gray-700"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="grid grid-cols-2 gap-6">
          {filteredBadges.map((badge, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border p-6 hover:scale-[1.02] transition-transform"
            >
              <h4 className="text-lg font-bold text-gray-800 mb-1 flex items-center gap-2">
                <span className="text-2xl">{badge.emoji}</span>
                {badge.title}
              </h4>

              <p className="text-sm text-gray-500 mb-4">{badge.desc}</p>

              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full ${
                    badge.unlocked ? "bg-green-500" : "bg-indigo-500"
                  }`}
                  style={{ width: `${badge.progress}%` }}
                />
              </div>

              <p className="text-xs text-gray-600 mt-2 text-right">
                {badge.progress}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
