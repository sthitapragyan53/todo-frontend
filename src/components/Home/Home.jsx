import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { API_BASE_URL } from "../../config";

const TABS = ["My Task 📌 ", "Today-task", "Pending-task ⚠️"];
const CATEGORIES = ["Work ✍🏻", "Personal 💼", "Wishlist ✨", "Birthday 🎂"];

const todayYMD = () => new Date().toISOString().split("T")[0];

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [filterTab, setFilterTab] = useState("My Task");
  const [category, setCategory] = useState("Work");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDetails, setShowDetails] = useState(null);

  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");

  const [tasks, setTasks] = useState([]);

  // LOAD tasks from backend
  const fetchTasks = async () => {
    const res = await fetch(`${API_BASE_URL}/api/tasks`
, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    if (!token) return navigate("/");
    fetchTasks();
  }, []);

  const filtered = useMemo(() => {
    let list = tasks.filter((t) => t.category === category);
    if (filterTab === "Today-task") list = list.filter((t) => t.date === todayYMD());
    if (filterTab === "Pending-task") list = list.filter((t) => !t.completed);
    return list;
  }, [tasks, category, filterTab]);

  // ADD TASK to backend
  const addTask = async () => {
    if (!taskName.trim()) return;

    await fetch(`${API_BASE_URL}/api/tasks`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify({ 
        title: taskName, 
        date: taskDate, 
        time: taskTime, 
        category 
      })
    });

    fetchTasks();
    setShowCreateModal(false);
    setTaskName(""); setTaskDate(""); setTaskTime("");
  };

  // TOGGLE completed
  const toggleComplete = async (task) => {
    await fetch(`${API_BASE_URL}/api/tasks/${task._id}`, {
      method: "PUT",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify({ completed: !task.completed })
    });
    fetchTasks();
  };

  // DELETE TASK
  const deleteTask = async (task) => {
    await fetch(`${API_BASE_URL}/api/tasks/${task._id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchTasks();
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="home-container">

      {/* NAVBAR */}
      <div className="home-navbar">
        <div className="home-nav-links">
          <Link to="/home" className="link">Home</Link>
          <Link to="/clock" className="link">Clock</Link>
          <Link to="/progress" className="link">Progress</Link>
        </div>
        <button className="home-settings-btn" onClick={() => navigate("/settings")}>⚙</button>
      </div>

      {/* HEADER */}
      <div className="home-header">
        <h1>Tasks 📜</h1>
        <p className="home-sub">Stay on top of your day.</p>
      </div>

      {/* TABS */}
      <div className="home-tabs">
        {TABS.map((tab) => (
          <button key={tab} className={filterTab === tab ? "active" : ""} onClick={() => setFilterTab(tab)}>
            {tab}
          </button>
        ))}
      </div>

      {/* CATEGORIES */}
      <div className="home-categories">
        {CATEGORIES.map((cat) => (
          <button key={cat} className={category === cat ? "active" : ""} onClick={() => setCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* TASK LIST */}
      <div className="home-task-list">
        {filtered.length === 0 && <div className="home-empty">No tasks here yet.</div>}
        {filtered.map((task) => (
          <div className="home-task" key={task._id}>
            <button className={`home-check ${task.completed ? "checked" : ""}`} onClick={() => toggleComplete(task)}>
              {task.completed ? "✔" : ""}
            </button>
            <span className={`home-task-text ${task.completed ? "done" : ""}`}>
              {task.title}
            </span>
            <button className="home-delete" onClick={() => deleteTask(task)}>✕</button>
          </div>
        ))}
      </div>

      {/* CREATE TASK */}
      <button className="home-create" onClick={() => setShowCreateModal(true)}>+ Create Task</button>

      {/* MODAL */}
      {showCreateModal && (
        <div className="home-modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="home-modal" onClick={(e) => e.stopPropagation()}>
            <h2>New Task</h2>
            <input placeholder="Task name" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
            <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} />
            <input type="time" value={taskTime} onChange={(e) => setTaskTime(e.target.value)} />
            <button className="home-primary" onClick={addTask}>Create Task</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
