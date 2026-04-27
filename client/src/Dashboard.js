import React, { useEffect, useState } from "react";
import { socket } from "./socket";
import MapView from "./MapView";

// 🎨 Color based on type
function getColor(type) {
  if (type === "Fire") return "#ef4444";
  if (type === "Medical") return "#22c55e";
  if (type === "Security") return "#f59e0b";
  return "#64748b";
}

// 🎯 Color based on severity
function getSeverityColor(severity) {
  if (severity === "High") return "red";
  if (severity === "Medium") return "orange";
  return "green";
}

function Dashboard() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    socket.emit("getAll");

    const handleAll = (data) => setIncidents(data);

    const handleNew = (data) => {
      // 🔊 Sound alert
      new Audio("https://www.soundjay.com/button/beep-01a.mp3").play();

      setIncidents((prev) => [data, ...prev]);
    };

    socket.on("all", handleAll);
    socket.on("newIncident", handleNew);

    return () => {
      socket.off("all", handleAll);
      socket.off("newIncident", handleNew);
    };
  }, []);

  const latest = incidents[0];

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧑‍🚒 Control Room Dashboard</h2>

      {/* 🚨 FLASH ALERT BANNER */}
      {latest && (
        <div
          style={{
            background: "red",
            padding: "10px",
            marginBottom: "10px",
            color: "white",
            fontWeight: "bold",
            animation: "blink 1s infinite"
          }}
        >
          🚨 NEW INCIDENT: {latest.type} ({latest.severity})
        </div>
      )}

      {/* 📊 STATS PANEL */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "15px"
        }}
      >
        <div>Total: {incidents.length}</div>
        <div>🔥 Fire: {incidents.filter(i => i.type === "Fire").length}</div>
        <div>🟢 Medical: {incidents.filter(i => i.type === "Medical").length}</div>
        <div>🟠 Security: {incidents.filter(i => i.type === "Security").length}</div>
      </div>

      {/* 🗺️ MAP */}
      <MapView incidents={incidents} />

      {/* 📋 INCIDENT LIST */}
      <div style={{ marginTop: "20px" }}>
        {incidents.length === 0 ? (
          <p>No incidents yet 🚀</p>
        ) : (
          incidents.map((i) => (
            <div
              key={i.id}
              style={{
                background: "#1e293b",
                padding: "15px",
                marginBottom: "10px",
                borderLeft: `5px solid ${getColor(i.type)}`,
                borderRadius: "10px"
              }}
            >
              {/* TYPE */}
              <strong style={{ color: getColor(i.type), fontSize: "18px" }}>
                {i.type}
              </strong>

              {/* MESSAGE */}
              <p style={{ margin: "5px 0" }}>{i.message}</p>

              {/* SEVERITY */}
              <p style={{ color: getSeverityColor(i.severity) }}>
                🎯 Severity: {i.severity}
              </p>

              {/* CONTACT */}
              <p>📞 {i.contact || "N/A"}</p>

              {/* TIME */}
              <p>⏱ {i.time}</p>

              {/* LOCATION */}
              {i.coords && (
                <small style={{ color: "#94a3b8" }}>
                  Lat: {i.coords.lat.toFixed(3)} | Lng: {i.coords.lng.toFixed(3)}
                </small>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
