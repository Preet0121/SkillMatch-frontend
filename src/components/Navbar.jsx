import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ padding: 20, borderBottom: "1px solid #ddd" }}>
      <Link to="/home" style={{ marginRight: 15 }}>Home</Link>
      <Link to="/pitches" style={{ marginRight: 15 }}>Pitches</Link>
      <Link to="/messages">Messages</Link>
    </div>
  );
}
