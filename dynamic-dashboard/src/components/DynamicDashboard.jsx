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
            <li key={index}>
               {task.completed ? "✅" : "❌"} {task.taskName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

  export default DynamicDashboard;
/*
// 3. Render a Task List:

const tasks = [
  { taskName: "Complete React tutorial", completed: true },
  { taskName: "Build a project", completed: false },
  { taskName: "Review JavaScript basics", completed: false }
];

{tasks.map((task, index) => (
  <li key={index}>
    {task.completed ? "✅" : "❌"} {task.taskName}
  </li>
))}


// 4. Combine Everything:

Put greeting, conditional message, and task list all inside one <div>


// Stretch Goal 1: Date Display

const currentDate = new Date().toLocaleDateString();
<p>Today's Date: {currentDate}</p>


// Stretch Goal 2: Highlight Completed Tasks

<li style={{ color: task.completed ? "green" : "black" }}>
  {task.completed ? "✅" : "❌"} {task.taskName}
</li>


// Stretch Goal 3: Task Counts

const completedCount = tasks.filter(task => task.completed).length;
const incompleteCount = tasks.filter(task => !task.completed).length;

<p>Completed Tasks: {completedCount}</p>
<p>Incomplete Tasks: {incompleteCount}</p>
*/
