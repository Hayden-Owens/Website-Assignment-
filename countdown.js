function updateCountdown() {
  // Set the target date to July 20, 2024
  const targetDate = new Date("July 20, 2024 00:00:00").getTime();

  // Get the current date and time
  const currentDate = new Date().getTime();

  // Calculate the time remaining in milliseconds
  const timeRemaining = targetDate - currentDate;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update the HTML elements with the countdown values
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update when the page loads
updateCountdown();