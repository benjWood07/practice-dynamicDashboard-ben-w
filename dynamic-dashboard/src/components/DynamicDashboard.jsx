import React from 'react';

function DynamicDashboard() {
  const userName = "Walter";
  const isPremiumUser = false;
  const tasks = ["Complete React tutorial", "Build a project", "Review JavaScript basics"];

  return (
    <div className="dashboard">
      <h1>Welcome, {userName}!</h1>
      
      <div className="membership-type">
        {isPremiumUser ? (
          <p>Thank you for being a premium member!</p>
        ) : (
          <p>Upgrade to premium to enjoy exclusive features!</p>
        )}
      </div>

      <div className="task-list">
        <h2>Your Tasks:</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

  export default DynamicDashboard;
