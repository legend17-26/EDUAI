/**
 * EDUPATH AI - POMODORO TIMER
 */
export class PomodoroTimer {
  constructor(displayId) {
    this.display = document.getElementById(displayId);
    this.timeLeft = 25 * 60; // 25 Minutes
    this.timer = null;
  }

  start() {
    if (this.timer) return;
    this.timer = setInterval(() => {
      this.timeLeft--;
      this.updateDisplay();
      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.timer = null;
        alert('Pomodoro Session Complete! Take a 5 minute break.');
      }
    }, 1000);
  }

  pause() {
    clearInterval(this.timer);
    this.timer = null;
  }

  reset() {
    this.pause();
    this.timeLeft = 25 * 60;
    this.updateDisplay();
  }

  updateDisplay() {
    if (!this.display) return;
    const mins = Math.floor(this.timeLeft / 60);
    const secs = this.timeLeft % 60;
    this.display.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
}