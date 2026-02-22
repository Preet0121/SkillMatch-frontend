

import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.55),
            rgba(0,0,0,0.65)
          ),
          url(${heroImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div style={{ color: "#fff", maxWidth: "900px", padding: "20px" }}>
        <p
          style={{
            letterSpacing: "3px",
            fontSize: "14px",
            opacity: 0.9,
            marginBottom: "16px",
          }}
        >
        
        </p>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: "700",
            marginBottom: "28px",
          }}
        >
          SkillMatch
        </h1>

        <p
  style={{
    fontSize: "20px",
    lineHeight: "1.8",
    opacity: 0.95,
    marginBottom: "42px",
    fontWeight: "700",              // 🔥 BOLD
    animation: "fadeUp 1.2s ease forwards",
  }}
>

          SkillMatch is a smart skill-matching platform that helps users identify
          suitable opportunities, projects, and learning paths based on their
          skills and preferences.
        </p>

        <div style={{ display: "flex", gap: "32px", justifyContent: "center" }}>
  <button
    style={{
      padding: "18px 48px",
      fontSize: "18px",
      borderRadius: "12px",
      border: "none",
      background: "#ffffff",
      color: "#000000",
      fontWeight: "600",
      cursor: "pointer",
      minWidth: "180px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
      transition: "all 1.3s ease",
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = "scale(1.05)";
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = "scale(1)";
    }}
  
            onClick={() => navigate("/login")}
          >
            Login
          </button>

            <button
    style={{
      padding: "18px 52px",
      fontSize: "18px",
      borderRadius: "12px",
      border: "none",
      background: "#2563eb",
      color: "#ffffff",
      fontWeight: "700",
      cursor: "pointer",
      minWidth: "200px",
      boxShadow: "0 12px 35px rgba(37,99,235,0.5)",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = "scale(1.08)";
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = "scale(1)";
    }}
  
   
            onClick={() => navigate("/signup")}

        >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
<style>
{`
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`}
</style>

export default Welcome;
