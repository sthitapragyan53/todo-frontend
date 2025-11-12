import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { API_BASE_URL } from "../../config"; 
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import "./Progress.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Progress = () => {
  const [taskData, setTaskData] = useState([]);
  const [view, setView] = useState("monthly");
  const token = localStorage.getItem("token");

  // ✅ Fetch tasks from backend
  const fetchTasks = async () => {
    const res = await fetch(`${API_BASE_URL}/api/tasks`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setTaskData(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ✅ Monthly completion count
  const completedMonthly = Array(12).fill(0);
  taskData.forEach((task) => {
    if (task.completed && task.date) {
      const month = new Date(task.date).getMonth();
      completedMonthly[month]++;
    }
  });

  // ✅ Weekly completion count
  const completedWeekly = Array(7).fill(0);
  const today = new Date();
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));

  taskData.forEach((task) => {
    if (task.completed && task.date) {
      const d = new Date(task.date);
      if (d >= monday && d <= today) {
        const index = (d.getDay() + 6) % 7;
        completedWeekly[index]++;
      }
    }
  });

  const chartData = {
    labels: view === "monthly" ? MONTHS : WEEK_DAYS,
    datasets: [
      {
        label: "Completed Tasks",
        data: view === "monthly" ? completedMonthly : completedWeekly,
        backgroundColor: "rgba(76,132,255,0.85)",
        borderRadius: 10,
      },
    ],
  };

  return (
    <div className="progress-container">
      <header className="progress-header">
        <h1>Progress 📈</h1>
        <p>{view === "monthly" ? "Monthly completion overview" : "Weekly progress breakdown"}</p>
      </header>

      <div className="toggle-buttons">
        <button className={view === "monthly" ? "active" : ""} onClick={() => setView("monthly")}>Monthly</button>
        <button className={view === "weekly" ? "active" : ""} onClick={() => setView("weekly")}>Weekly</button>
      </div>

      <div className="progress-chart">
        <Bar data={chartData} />
      </div>

      <p className="motivational-quote">
        "Small progress every day adds up to big results."
      </p>
    </div>
  );
};

export default Progress;
