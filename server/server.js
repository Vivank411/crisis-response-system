const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json()); // ✅ important for parsing JSON

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

let incidents = [];

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // 📥 RECEIVE ALERT FROM GUEST
  socket.on("sendAlert", async (data) => {
    let type = "General";

    // 🤖 AI classification
    try {
      const res = await axios.post("http://localhost:6000/predict", {
        message: data.message
      });
      type = res.data.type;
    } catch (err) {
      console.log("AI error:", err.message);
    }

    // 📌 CREATE INCIDENT OBJECT
    const incident = {
      id: Date.now(),
      type: data.type || type,
      message: data.message || "No message",
      severity: data.severity || "Low",
      contact: data.contact || "N/A",
      coords: data.coords || null,
      time: new Date().toLocaleTimeString()
    };

    // 💾 STORE
    incidents.push(incident);

    // 📡 SEND TO ALL DASHBOARDS
    io.emit("newIncident", incident);

    console.log("New Incident:", incident);
  });

  // 📤 SEND ALL EXISTING INCIDENTS
  socket.on("getAll", () => {
    socket.emit("all", incidents);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});
