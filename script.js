const sessionClock = document.querySelector("#session-clock");

function updateSessionClock() {
  sessionClock.textContent = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

updateSessionClock();
window.setInterval(updateSessionClock, 1000);
