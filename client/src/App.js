import React, { useState } from "react";
import Guest from "./Guest";
import Dashboard from "./Dashboard";
import "./styles.css";

function App() {
  const [view, setView] = useState("guest");

  return (
    <div>
      <h1>🚨 Crisis Response System</h1>

      <div style={{ textAlign: "center" }}>
        <button onClick={() => setView("guest")}>Guest</button>
        <button onClick={() => setView("dashboard")}>Control Room</button>
      </div>

      {view === "guest" ? <Guest /> : <Dashboard />}
    </div>
  );
}

export default App;
