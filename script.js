// Timeline data for James A. Garfield with real historical events
let timelineData = [
  { date: 'November 19, 1831', event: 'James Abram Garfield is born in Orange, Ohio.' },
  { date: '1851-1854', event: 'Attends Williams College in Massachusetts.' },
  { date: '1861-1863', event: 'Serves as a Major General in the Union Army during the Civil War, notable for his leadership in the Battle of Middle Creek.' },
  { date: '1863', event: 'Garfield is elected to the U.S. House of Representatives, where he serves for 17 years.' },
  { date: '1880', event: 'Garfield is elected as the 20th President of the United States after a contentious Republican convention.' },
  { date: 'March 4, 1881', event: 'Garfield is inaugurated as President of the United States.' },
  { date: 'May 19, 1881', event: 'Garfield delivers a speech to the Republican National Committee, emphasizing civil service reform.' },
  { date: 'July 2, 1881', event: 'Garfield is shot by Charles J. Guiteau, a disgruntled office seeker, at the Washington, D.C. railroad station.' },
  { date: 'September 19, 1881', event: 'James A. Garfield dies from his wounds after a prolonged illness. He is succeeded by Vice President Chester A. Arthur.' },
  { date: 'October 1881', event: 'Garfield is remembered and mourned as a martyr for civil service reform, as his death fuels efforts to pass the Pendleton Civil Service Reform Act.' }
];

// Function to display the timeline of events
function displayTimeline() {
  let timelineList = document.getElementById('timelineList');
  
  // Clear the existing timeline
  timelineList.innerHTML = '';

  // Loop through the timeline data and create list items
  timelineData.forEach((event) => {
      let li = document.createElement('li');
      li.classList.add('timeline-item');
      li.innerHTML = `<span class="date">${event.date}</span>: ${event.event}`;
      timelineList.appendChild(li);
  });
}

// Display the timeline when the page loads
displayTimeline();

// Interactive Quiz
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
