import React, { useState } from 'react';

const Todolistapp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask(""); 
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((t, i) => {
      if (i === index) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.todoApp}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
      <h1 style={styles.heading}>To-Do List</h1>
      <div style={styles.inputSection}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>Add Task</button>
      </div>
      <ul style={styles.taskList}>
        {tasks.map((t, index) => (
          <li key={index} style={styles.taskItem}>
            <span
              style={{
                textDecoration: t.completed ? 'line-through' : 'none',
                cursor: 'default',
                flex: 1,
              }}
            >
              {t.text}
            </span>
            <button
              onClick={() => toggleTaskCompletion(index)}
              style={{
                ...styles.completeButton,
                backgroundColor: t.completed ? '#ffc107' : '#28a745',
              }}
            >
              {t.completed ? 'Completed' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(index)} style={styles.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Updated styles with background colors
const styles = {
  todoApp: {
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#f0f4c3', // Light green background for the app
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    color: '#333',
  },
  inputSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    backgroundColor: '#e8f5e9', 
    padding: '10px',
    borderRadius: '5px',
  },
  input: {
    flex: '1',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '5px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#0288d1', // Blue button color
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  taskList: {
    listStyleType: 'none',
    padding: '0',
    backgroundColor: '#f9fbe7', 
    borderRadius: '5px',
    padding: '10px',
  },
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
    backgroundColor: '#fff', // White background for each task item
    borderRadius: '5px',
    marginBottom: '5px',
  },
  deleteButton: {
    backgroundColor: '#d32f2f',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    padding: '5px 10px',
    borderRadius: '5px',
    marginLeft: '10px',
  },
  completeButton: {
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    padding: '5px 10px',
    borderRadius: '5px',
  },
};

export default Todolistapp;
