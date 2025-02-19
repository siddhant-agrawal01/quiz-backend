// // backend/server.js
// const express = require('express');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // Sample quiz data
// const quiz = {
//   title: "General Knowledge Quiz",
//   questions: [
//     {
//       id: 1,
//       question: "What is the capital of France?",
//       options: ["Paris", "London", "Berlin", "Madrid"],
//       answer: "Paris"
//     },
//     {
//       id: 2,
//       question: "Which planet is known as the Red Planet?",
//       options: ["Earth", "Mars", "Jupiter", "Saturn"],
//       answer: "Mars"
//     },
//     {
//       id: 3,
//       question: "Who wrote 'Romeo and Juliet'?",
//       options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Leo Tolstoy"],
//       answer: "William Shakespeare"
//     }
//   ]
// };

// app.get('/api/quiz', (req, res) => {
//   res.json(quiz);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample quiz data
const quiz = {
  title: "General Knowledge Quiz",
  questions: [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      id: 3,
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Leo Tolstoy"],
      answer: "William Shakespeare"
    },  {
      id: 4,
      question: "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: "Queue"
    },
    {
      id: 5,
      question: "Which of the following is primarily used for structuring web pages?",
      options: ["Python", "Java", "HTML", "C++"],
      answer: "HTML"
    }
  ]
};

app.get('/api/quiz', (req, res) => {
  res.json(quiz);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
