
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const holiday = document.getElementById('holiday');
const display = document.getElementById('display')

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`Janurary 01 ${currentYear + 1} 00:00:00`);
const christmasTime = new Date(`December 25 ${currentYear} 00:00:00`);
const nextChristmasTime = new Date(`December 25 ${currentYear + 1} 00:00:00`);
const valentineTime = new Date(`February 10 ${currentYear} 00:00:00`);
const nextValentineTime = new Date(`February 14 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;

function updateCountdown() {
  const holidayValue = holiday.value;
  const currentTime = new Date();
  let holidayTime;

  if (holidayValue === "New Year") {
    holidayTime = newYearTime;
  } else if (holidayValue === "Christmas") {
    holidayTime = currentTime < christmasTime ? christmasTime : nextChristmasTime;
  } else {
    holidayTime = currentTime < valentineTime ? valentineTime : nextValentineTime;
  }

  display.innerText = `${holidayValue} Countdown`;
  year.innerText = holidayTime.getFullYear();



  const diff = holidayTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60/ 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

holiday.addEventListener('change', updateCountdown)

// Updates every second
setInterval(updateCountdown, 1000);
