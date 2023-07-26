// Import required modules
const request = require('request');

// Function to count completed tasks by user id
function countCompletedTasks(apiUrl) {
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error('Invalid API response:', response.statusCode);
      return;
    }

    const tasks = JSON.parse(body);
    const completedTasksByUser = {};

    // Count completed tasks for each user
    tasks.forEach((task) => {
      if (task.completed) {
        if (completedTasksByUser[task.userId]) {
          completedTasksByUser[task.userId]++;
        } else {
          completedTasksByUser[task.userId] = 1;
        }
      }
    });

    // Print the results
    console.log(completedTasksByUser);
  });
}

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Call the function with the provided API URL
countCompletedTasks(apiUrl);
