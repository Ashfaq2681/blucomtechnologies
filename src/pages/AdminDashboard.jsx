import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

  import { useState } from "react";
  import { Bell, Briefcase, BarChart, Code, Settings } from "lucide-react";
  import { motion } from "framer-motion";

  export default function AdminDashboard() {
    const [selectedSection, setSelectedSection] = useState("admin");
    const userName = "John Doe";

    return (
      <div style={{ minHeight: "100vh", display: "flex", background: "linear-gradient(to bottom right, #e2e8f0, #cbd5e1)", padding: "24px" }}>
        {/* Sidebar */}
        <div style={{ width: "80px", background: "black", borderRadius: "16px", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column", alignItems: "center", padding: "16px", gap: "24px" }}>
          <img src="/admin-avatar.jpg" alt="Admin" style={{ width: "48px", height: "48px", borderRadius: "50%", border: "2px solid white" }} />
          <Briefcase color="white" size={28} onClick={() => setSelectedSection("admin")} style={{ cursor: "pointer" }} />
          <BarChart color="white" size={28} onClick={() => setSelectedSection("marketing")} style={{ cursor: "pointer" }} />
          <Code color="white" size={28} onClick={() => setSelectedSection("it")} style={{ cursor: "pointer" }} />
        </div>

        {/* Settings */}
        <div style={{ position: "absolute", bottom: "24px", left: "24px", background: "black", borderRadius: "16px", padding: "16px" }}>
          <Settings color="white" size={28} style={{ cursor: "pointer" }} />
        </div>

        {/* Main Content */}
        <motion.div style={{ flex: 1, marginLeft: "24px", padding: "24px", background: "rgba(255, 255, 255, 0.6)", borderRadius: "16px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#374151" }}>Admin Dashboard</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontWeight: "bold", color: "#374151" }}>{userName}</span>
              <Bell color="#374151" size={24} style={{ cursor: "pointer" }} />
              <img src="/admin-avatar.jpg" alt="Admin" style={{ width: "40px", height: "40px", borderRadius: "50%", border: "2px solid #374151" }} />
            </div>
          </div>

          {/* Dynamic Sections */}
          {selectedSection === "admin" && (
            <div>
              <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#374151" }}>Admin Area</h2>
              <div style={{ background: "white", padding: "16px", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0,0,0,0.1)" }}>Calendar & Daily Tasks Here</div>
            </div>
          )}

          {selectedSection === "marketing" && (
            <div>
              <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#374151" }}>Marketing</h2>
              <div style={{ background: "white", padding: "16px", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0,0,0,0.1)" }}>
                <form>
                  <label style={{ fontWeight: "bold", color: "#374151" }}>Article Title</label>
                  <input type="text" style={{ width: "100%", padding: "8px", borderRadius: "4px", marginTop: "8px" }} placeholder="Enter title" />

                  <label style={{ fontWeight: "bold", color: "#374151", marginTop: "16px", display: "block" }}>Article Content</label>
                  <textarea style={{ width: "100%", padding: "8px", borderRadius: "4px", marginTop: "8px" }} rows="4" placeholder="Write your article..."></textarea>

                  <label style={{ fontWeight: "bold", color: "#374151", marginTop: "16px", display: "block" }}>Schedule Date</label>
                  <input type="date" style={{ width: "100%", padding: "8px", borderRadius: "4px", marginTop: "8px" }} />

                  <button type="submit" style={{ marginTop: "16px", background: "#3b82f6", color: "white", padding: "8px 16px", borderRadius: "4px", border: "none", cursor: "pointer" }}>Upload Article</button>
                </form>
              </div>
            </div>
          )}

          {selectedSection === "it" && (
            <div>
              <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#374151" }}>IT Section</h2>
              <div style={{ background: "white", padding: "16px", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0,0,0,0.1)" }}>AI-Based Code Recommendations Here</div>
            </div>
          )}
        </motion.div>
      </div>
    );
  }
