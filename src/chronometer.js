class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.stopTimeNow = setInterval(() => { 
      this.currentTime += 1;
      if (printTimeCallback) printTimeCallback();
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    const str = value.toString();
     if (value < 10) {
      return '0' + value.toString();
     }
     else {
      return value.toString();
     }
  }

  stop() {
    clearInterval(this.stopTimeNow);
  }

   
  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
