import React, { useState } from "react";
import { socket } from "./socket";

function Guest() {
  const [type, setType] = useState("Fire");
  const [severity, setSeverity] = useState("Low");
  const [contact, setContact] = useState("");

  const messages = {
    Fire: "Fire in building",
    Medical: "Person unconscious",
    Security: "Suspicious activity"
  };

  const sendAlert = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      socket.emit("sendAlert", {
        type,
        message: messages[type],
        severity,
        contact,
        coords: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }
      });
    });

    alert(`🚨 ${type} Alert Sent!`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🚨 Emergency Panel</h2>

      <select onChange={(e) => setType(e.target.value)}>
        <option>Fire</option>
        <option>Medical</option>
        <option>Security</option>
      </select>

      <br /><br />

      <select onChange={(e) => setSeverity(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <br /><br />

      <input
        placeholder="Enter Contact Number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      <br /><br />

      <button
        onClick={sendAlert}
        style={{
          background: "red",
          padding: "12px",
          fontSize: "16px"
        }}
      >
        🚨 Send Alert
      </button>
    </div>
  );
}

export default Guest;
