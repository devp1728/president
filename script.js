//quiz
document.getElementById('quizButton').addEventListener('click', function() {
  let userAnswer = prompt("What year was James A. Garfield assassinated?");
  let resultMessage = '';

  if (userAnswer === '1881') {
      resultMessage = "Correct! Garfield was assassinated in 1881.";
  } else {
      resultMessage = "Incorrect. Garfield was assassinated in 1881.";
  }

  document.getElementById('quizResult').innerHTML = resultMessage;
});
