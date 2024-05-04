let currentQuestion = 1;

function prevQuestion() {
  if (currentQuestion > 1) {
    currentQuestion--;
    updateQuestion();
  }
}

function nextQuestion() {
  currentQuestion++;
  updateQuestion();
}

function updateQuestion() {
  const questionElement = document.querySelector('.card');
  questionElement.querySelector('h2').textContent = `Question ${currentQuestion}`;
  // Update the question text based on the current question number
  // Replace the text content with the next question
  switch (currentQuestion) {
    case 1:
      questionElement.querySelector('p').textContent = "If you could trade lives with anyone for a day, who would it be and why?";
      break;
    case 2:
      questionElement.querySelector('p').textContent = "What's the most embarrassing thing that has ever happened to you in public?";
      break;
    case 3:
      questionElement.querySelector('p').textContent = "If you could have dinner with any fictional character, who would it be and why?";
      break;
    case 4:
      questionElement.querySelector('p').textContent = "What's the most unusual fear you have?";
      break;
    case 5:
      questionElement.querySelector('p').textContent = "If you could have any superpower, but it could only be mildly useful, what would it be?";
      break;
    case 6:
      questionElement.querySelector('p').textContent = "What's the most unusual thing you've ever eaten?";
      break;
    case 7:
      questionElement.querySelector('p').textContent = "If you could live in any time period, past or future, for one year, when would you choose?";
      break;
    case 8:
      questionElement.querySelector('p').textContent = "What's the weirdest rumor you've ever heard about yourself?";
      break;
    case 9:
      questionElement.querySelector('p').textContent = "If you could only communicate using emojis for a day, how would you get your message across?";
      break;
    case 10:
      questionElement.querySelector('p').textContent = "What's the most embarrassing thing you've ever Googled?";
      break;
    case 11:
      questionElement.querySelector('p').textContent = "If you could switch lives with someone for a week, who would it be and why?";
      break;
    case 12:
      questionElement.querySelector('p').textContent = "What's the strangest dream you've ever had?";
      break;
    case 13:
      questionElement.querySelector('p').textContent = "If you could be a contestant on any game show, which one would you choose?";
      break;
    case 14:
      questionElement.querySelector('p').textContent = "What's the most ridiculous thing you've ever bought?";
      break;
    case 15:
      questionElement.querySelector('p').textContent = "If you could be a fly on the wall in any room, whose room would you choose?";
      break;
    case 16:
      questionElement.querySelector('p').textContent = "What's the most unusual talent you have?";
      break;
    case 17:
      questionElement.querySelector('p').textContent = "If you could create a holiday, what would it be and how would we celebrate it?";
      break;
    case 18:
      questionElement.querySelector('p').textContent = "What's the most embarrassing thing you've done to get someone's attention?";
      break;
    case 19:
      questionElement.querySelector('p').textContent = "If you could be a character in any movie, which movie would you choose?";
      break;
    case 20:
      questionElement.querySelector('p').textContent = "What's the most embarrassing thing your parents have ever caught you doing?";
      break;
    case 21:
      questionElement.querySelector('p').textContent = "If you could only speak in rhymes for a day, how would you handle it?";
      break;
    case 22:
      questionElement.querySelector('p').textContent = "What's the weirdest place you've ever fallen asleep?";
      break;
    case 23:
      questionElement.querySelector('p').textContent = "If you could be a professional athlete in any sport, which sport would you choose?";
      break;
    case 24:
      questionElement.querySelector('p').textContent = "What's the most unusual job you've ever had?";
      break;
    case 25:
      questionElement.querySelector('p').textContent = "If you could trade lives with anyone for a day, who would it be and why?";
      break;
    case 26:
      questionElement.querySelector('p').textContent = "What's the most ridiculous thing you've ever done for a dare?";
      break;
    case 27:
      questionElement.querySelector('p').textContent = "If you could have any animal as a pet, what would it be?";
      break;
    case 28:
      questionElement.querySelector('p').textContent = "What's the most embarrassing thing you've ever said in front of a large group of people?";
      break;
    case 29:
      questionElement.querySelector('p').textContent = "If you could be any fictional character, who would you be and why?";
      break;
    case 30:
      questionElement.querySelector('p').textContent = "What's the weirdest dream you've ever had?";
      break;
    case 31:
      questionElement.querySelector('p').textContent = "If you could only listen to one song for the rest of your life, what would it be?";
      break;
    case 32:
      questionElement.querySelector('p').textContent = "What's the most spontaneous thing you've ever done?";
      break;
    case 33:
      questionElement.querySelector('p').textContent = "If you could only eat one type of cuisine for the rest of your life, what would it be?";
      break;
    case 34:
      questionElement.querySelector('p').textContent = "What's the most embarrassing thing you've ever done at work?";
      break;
    case 35:
      questionElement.querySelector('p').textContent = "If you could have any job in the world for one week, what would it be?";
      break;
    case 36:
      questionElement.querySelector('p').textContent = "What's the strangest thing you've ever seen in someone else's home?";
      break;
    // Add more cases for each question
    // Use a similar structure for each case
    default:
      break;
  }
}

// Call updateQuestion to initialize the first question
updateQuestion();
