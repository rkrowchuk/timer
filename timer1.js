const times = process.argv.slice(2);

const beep = function(num) {
  if (num > 0) {
    setTimeout(()=>{
      process.stdout.write('beep\n');
    }, num * 1000);
  }
};

const timer = function(times) {
  if (times !== undefined) {
    for (let i = 0; i < times.length; i++) {
      beep(times[i]);
    }
  }
};

timer(times);
