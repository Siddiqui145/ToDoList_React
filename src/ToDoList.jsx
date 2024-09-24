import React, { useState, useEffect } from 'react';
import './index.css';

export const ToDoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const reorderTasks = (tasks) => {
    return tasks.map((task, index) => ({ ...task, number: index + 1 }));
  };

  const handleAddOrUpdateTask = () => {
    if (task.trim() === '') {
      setAlertMessage('Please enter a task');
      return;
    }

    if (editTaskId !== null) {
      const updatedTasks = tasks.map((t) => {
        if (t.id === editTaskId) {
          return { ...t, description: task };
        }
        return t;
      });
      setTasks(reorderTasks(updatedTasks));
      setEditTaskId(null);
      setTask('');
    } else {
      const isDuplicate = tasks.some((t) => t.description.toLowerCase() === task.toLowerCase());
      if (isDuplicate) {
        setAlertMessage('Task already exists!');
        return;
      }

      const newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        description: task,
        isDone: false,
      };

      setTasks(reorderTasks([...tasks, newTask]));
      setTask('');
    }
  };

  const handleDelete = (id) => {
    const filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(reorderTasks(filteredTasks));
  };

  const handleComplete = (id) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === id) {
        t.isDone = !t.isDone;
      }
      return t;
    });
    setTasks(reorderTasks(updatedTasks));
  };

  const handleEdit = (id, description) => {
    setEditTaskId(id);
    setTask(description);
  };

  const handleCloseAlert = () => {
    setAlertMessage('');
  };

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#121212' : '#f9f9f9';
    document.body.style.color = darkMode ? '#ffffff' : '#000000'; 
  }, [darkMode]);

  return (
    <>
      <div className={`text-center mt-4 ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <h2 style={{ color: darkMode ? '#ffffff' : '#000000' }}>DIEMS TO-DO LIST</h2>
        <button className="btn btn-secondary mb-3" onClick={toggleDarkMode}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
        <div className="d-flex justify-content-center">
          <div className="form-floating" style={{ width: '300px' }}>
            <textarea
              className="form-control"
              placeholder="Enter your Task"
              id="floatingTextarea"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              style={{
                height: '80px',
                backgroundColor: darkMode ? '#555' : '#fff',
                color: darkMode ? '#fff' : '#000',
              }}
            />
            <label htmlFor="floatingTextarea">Enter your Task</label>
          </div>
        </div>
        <button type="button" className="btn btn-primary mt-2" onClick={handleAddOrUpdateTask}>
          {editTaskId !== null ? 'Update Task' : 'Add Task'}
        </button>

        <div className="mt-4">
          <h3 style={{ color: darkMode ? '#ffffff' : '#000000' }}>Tasks</h3>
          <ul className="list-group d-flex justify-content-center">
            {tasks.map((t, index) => (
              <li
                key={t.id}
                className="list-group-item d-flex justify-content-between align-items-center"
                style={{
                  width: '400px',
                  height: '60px',
                  margin: '10px auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  backgroundColor: darkMode ? '#333' : '#fff',
                  color: darkMode ? '#fff' : '#000',
                  transition: 'all 0.3s ease', 
                }}
              >
                <span
                  style={{
                    textDecoration: t.isDone ? 'line-through' : 'none',
                    color: t.isDone ? (darkMode ? 'lightgray' : 'gray') : darkMode ? 'white' : 'black',
                    width: '60%',
                  }}
                >
                  {index + 1}. {t.description}
                </span>

                <span style={{ display: 'flex', gap: '10px' }}>
                  <button className="btn btn-danger" onClick={() => handleDelete(t.id)}>
                    Delete
                  </button>
                  <button className="btn btn-success" onClick={() => handleComplete(t.id)}>
                    {t.isDone ? 'Undo' : 'Complete'}
                  </button>
                  <button className="btn btn-warning" onClick={() => handleEdit(t.id, t.description)}>
                    Edit
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {alertMessage && (
          <div className="custom-alert d-flex justify-content-center align-items-center">
            <div className="alert-box">
              <h4>{alertMessage}</h4>
              <button className="btn btn-primary mt-2" onClick={handleCloseAlert}>
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ToDoList;
