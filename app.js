function Metronome(start, end, time) {
  let minSpeed = 20;
  let maxSpeed = 300;
  let startSpeed = start;
  let endSpeed = end;
  let interval = 4;
  let going = true;
  let accel = time;
  this.speed = 80;
  let i = 1

  while (going && i < 100) {
    setTimeout(function () {
      alert("Hello" + i);
    }, 3000);
    i++
  }

//   this.play = function () {
//   };

  //   this.play = () => {
  //     while (going) {
  //   };
}

const metro = new Metronome(100, 100, 100);

metro.play();
