import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/admin-dashboard");
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to bottom right, #e2e8f0, #cbd5e1)"
    }}>
      <form onSubmit={handleLogin} style={{
        background: "white",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        width: "320px",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "16px", color: "#374151" }}>Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{
          background: "#3b82f6",
          color: "white",
          padding: "10px 16px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          width: "100%"
        }}>
          Login
        </button>
      </form>
    </div>
  );
}
