import { useState, useEffect } from "react";
import { Bell, Briefcase, BarChart, Code, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [selectedSection, setSelectedSection] = useState("admin");
  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [articles, setArticles] = useState([]);
  const userName = "John Doe";
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Admin Dashboard Loaded");
  }, []);

  // Logout function
  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  // Handle Article Submission
  const handleArticleSubmit = (e) => {
    e.preventDefault();

    if (!articleTitle || !articleContent || !scheduleDate) {
      console.warn("All fields are required.");
      return;
    }

    const newArticle = {
      title: articleTitle,
      content: articleContent,
      date: scheduleDate,
    };

    console.log("New article submitted:", newArticle);
    setArticles([...articles, newArticle]);

    setArticleTitle("");
    setArticleContent("");
    setScheduleDate("");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", background: "linear-gradient(to bottom right, #e2e8f0, #cbd5e1)", padding: "24px" }}>
      {/* Sidebar */}
      <div style={{ width: "80px", background: "black", borderRadius: "16px", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column", alignItems: "center", padding: "16px", gap: "24px" }}>
        <img src="/admin-avatar.jpg" alt="Admin" style={{ width: "48px", height: "48px", borderRadius: "50%", border: "2px solid white" }} />
        <Briefcase color="white" size={28} onClick={() => { setSelectedSection("admin"); console.log("Switched to Admin section"); }} style={{ cursor: "pointer" }} />
        <BarChart color="white" size={28} onClick={() => { setSelectedSection("marketing"); console.log("Switched to Marketing section"); }} style={{ cursor: "pointer" }} />
        <Code color="white" size={28} onClick={() => { setSelectedSection("it"); console.log("Switched to IT section"); }} style={{ cursor: "pointer" }} />
      </div>

      {/* Settings & Logout */}
      <div style={{ position: "absolute", bottom: "24px", left: "24px", background: "black", borderRadius: "16px", padding: "16px" }}>
        <Settings color="white" size={28} style={{ cursor: "pointer" }} onClick={handleLogout} />
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

        {/* Sections */}
        {selectedSection === "admin" && (
          <div>
            <h2>Admin Area</h2>
            <p>Calendar & Daily Tasks Here</p>
          </div>
        )}

        {selectedSection === "marketing" && (
          <div>
            <h2>Marketing</h2>
            <p>Upload articles here.</p>

            {/* Article Upload Form */}
            <form onSubmit={handleArticleSubmit} style={{ background: "white", padding: "16px", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0,0,0,0.1)", marginTop: "16px" }}>
              <label style={{ fontWeight: "bold", color: "#374151" }}>Article Title</label>
              <input
                type="text"
                value={articleTitle}
                onChange={(e) => setArticleTitle(e.target.value)}
                style={{ width: "100%", padding: "8px", borderRadius: "4px", marginTop: "8px" }}
                placeholder="Enter title"
                required
              />

              <label style={{ fontWeight: "bold", color: "#374151", marginTop: "16px", display: "block" }}>Article Content</label>
              <textarea
                value={articleContent}
                onChange={(e) => setArticleContent(e.target.value)}
                style={{ width: "100%", padding: "8px", borderRadius: "4px", marginTop: "8px" }}
                rows="4"
                placeholder="Write your article..."
                required
              ></textarea>

              <label style={{ fontWeight: "bold", color: "#374151", marginTop: "16px", display: "block" }}>Schedule Date</label>
              <input
                type="date"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
                style={{ width: "100%", padding: "8px", borderRadius: "4px", marginTop: "8px" }}
                required
              />

              <button type="submit" style={{ marginTop: "16px", background: "#3b82f6", color: "white", padding: "8px 16px", borderRadius: "4px", border: "none", cursor: "pointer" }}>
                Upload Article
              </button>
            </form>

            {/* Display Articles */}
            <h3 style={{ marginTop: "24px", fontWeight: "bold", color: "#374151" }}>Uploaded Articles</h3>
            <ul>
              {articles.length === 0 ? (
                <p>No articles uploaded yet.</p>
              ) : (
                articles.map((article, index) => (
                  <li key={index} style={{ background: "white", padding: "8px", borderRadius: "4px", boxShadow: "0px 2px 4px rgba(0,0,0,0.1)", marginTop: "8px" }}>
                    <h4>{article.title}</h4>
                    <p>{article.content}</p>
                    <small>Scheduled: {article.date}</small>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}

        {selectedSection === "it" && (
          <div>
            <h2>IT Section</h2>
            <p>AI-Based Code Recommendations Here</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
