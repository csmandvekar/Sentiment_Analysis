// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Bar } from 'react-chartjs-2';

// const App = () => {
//   const [file, setFile] = useState(null);
//   const [chartData, setChartData] = useState(null);

//   // Handle file upload
//   const handleFileUpload = (event) => {
//     setFile(event.target.files[0]);
//   };

//   // Handle file submission
//   const handleSubmit = async () => {
//     if (!file) {
//       alert("Please upload a file first.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await axios.post("http://127.0.0.1:8000/analyze/", formData, {
//         headers: {
//           Authorization: `Bearer authorize`,  
//         },
//       });
//       const sentiments = response.data.results;

//       // Count sentiment categories
//       const sentimentCounts = sentiments.reduce(
//         (acc, item) => {
//           acc[item.sentiment] += 1;
//           return acc;
//         },
//         { Positive: 0, Neutral: 0, Negative: 0 }
//       );

//       // Update chart data
//       setChartData({
//         labels: ["Positive", "Neutral", "Negative"],
//         datasets: [
//           {
//             label: "Sentiment Distribution",
//             data: [sentimentCounts.Positive, sentimentCounts.Neutral, sentimentCounts.Negative],
//             backgroundColor: ["#4caf50", "#2196f3", "#f44336"],
//           },
//         ],
//       });
//     } catch (error) {
//       console.error("Error analyzing file:", error);
//       alert("Failed to process file.");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Sentiment Analysis</h1>
//       <input type="file" accept=".csv" onChange={handleFileUpload} />
//       <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
//         Analyze
//       </button>
//       {chartData && (
//         <div style={{ marginTop: "20px" }}>
//           <Bar
//             data={chartData}
//             options={{
//               responsive: true,
//               plugins: { legend: { display: true } },
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
// import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const App = () => {
  const [file, setFile] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login
  const handleLogin = async () => {
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      console.log(username,password)
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/token`, formData)
      // , {
        // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // });
      const token = response.data.access_token;
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
      alert("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle file submission
  const handleSubmit = async () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to perform this action.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/token`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const sentiments = response.data.results;

      // Count sentiment categories
      const sentimentCounts = sentiments.reduce(
        (acc, item) => {
          acc[item.sentiment] += 1;
          return acc;
        },
        { Positive: 0, Neutral: 0, Negative: 0 }
      );

      // Update chart data
      setChartData({
        labels: ["Positive", "Neutral", "Negative"],
        datasets: [
          {
            label: "Sentiment Distribution",
            data: [sentimentCounts.Positive, sentimentCounts.Neutral, sentimentCounts.Negative],
            backgroundColor: ["#4caf50", "#2196f3", "#f44336"],
          },
        ],
      });
    } catch (error) {
      console.error("Error analyzing file:", error);
      alert("Failed to process file.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sentiment Analysis</h1>
      {!isLoggedIn ? (
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} style={{ marginLeft: "10px" }}>
            Login
          </button>
        </div>
      ) : (
        <div>
          <input type="file" accept=".csv" onChange={handleFileUpload} />
          <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
            Analyze
          </button>
          {chartData && (
            <div style={{ marginTop: "20px" }}>
              <Bar
                data={chartData}
                options={{
                  responsive: true,
                  plugins: { legend: { display: true } },
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;

