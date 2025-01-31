import React from 'react';
import { useState } from "react";

export default function App() {
  const [status, setStatus] = useState("All Systems Operational");

  const simulateFailover = () => {
    setStatus("⚠️ Disaster Detected! Initiating Failover...");
    setTimeout(() => setStatus("✅ DR Site Activated Successfully"), 3000);
  };

  const simulateRecovery = () => {
    setStatus("🔄 Recovering Primary Site...");
    setTimeout(() => setStatus("✅ Primary Site Restored"), 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Cloud-Based DR Simulator</h1>
      <p className="mt-4 text-lg">{status}</p>
      <div className="mt-6 space-x-4">
        <button onClick={simulateFailover} className="px-6 py-2 bg-red-600 rounded-lg">Simulate Failover</button>
        <button onClick={simulateRecovery} className="px-6 py-2 bg-green-600 rounded-lg">Simulate Recovery</button>
      </div>
    </div>
  );
}