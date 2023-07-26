#!/usr/bin/node

const request = require('request');

function countCompletedTasks(apiURL) {
  request(apiURL, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else if (response.statusCode !== 200) {
      console.error('Status Code:', response.statusCode);
    } else {
      const todos = JSON.parse(body);
      const completedTasks = {};

      todos.forEach((todo) => {
        if (todo.completed) {
          if (!completedTasks[todo.userId]) {
            completedTasks[todo.userId] = 1;
          } else {
            completedTasks[todo.userId]++;
          }
        }
      });

      console.log(completedTasks);
    }
  });
}

const apiURL = process.argv[2];
countCompletedTasks(apiURL);
