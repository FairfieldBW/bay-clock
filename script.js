var now = new Date();
// now.setDate(24);

var schedule = {
  "Monday": {
    "Morning Meeting": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 30), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 50)
    ],
    "A": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 55), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 10)
    ],
    "B": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 15), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 30)
    ],
    "Lunch": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 30), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 30)
    ],
    "C": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 30), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 45)
    ],
    "D": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 50), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 5)
    ]
  },
  "Tuesday": {
    "9/11 Group Advisory\n10/12 1-on-1s": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 30), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 50)
    ],
    "E": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 55), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 10)
    ],
    "F": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 15), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 30)
    ],
    "Lunch": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 30), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 30)
    ],
    "A": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 30), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 45)
    ],
    "B": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 50), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 5)
    ]
  },
  "Wednesday": {
    "Morning Meeting": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 30), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 50)
    ],
    "C": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 55), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 10)
    ],
    "D": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 15), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 30)
    ],
    "Lunch": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 30), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 30)
    ],
    "E": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 30), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 45)
    ],
    "F": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 50), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 5)
    ]
  },
  "Thursday": {
    "10/12 Group Advisory\n9/11 1-on-1s": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 30), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 50)
    ],
    "B": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 55), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 25)
    ],
    "A": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 35), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 05)
    ],
    "Lunch": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 05), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 55)
    ],
    "C": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 55), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 25)
    ]
  },
  "Friday": {
    "Morning Meeting": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 30), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 50)
    ],
    "D": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 55), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 25)
    ],
    "F": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 35), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 05)
    ],
    "Lunch": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 05), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 55)
    ],
    "E": [
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 55), 
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 25)
    ]
  }
}

function getCurrentTime(time) {
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
    if (hour > 11) {
      if (hour != 12){
        hour -=12
      }
      am_pm = "PM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    return hour + ":" + min + ":" + sec + am_pm
}

function getTime(time) {
    let hour = time.getHours();
    let min = time.getMinutes();
    if (hour > 11) {
      if (hour != 12){
        hour -=12
      }
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    return hour + ":" + min
}

function getDayDict(time) {
  return Object.values(schedule)[time.getDay() - 1]
}

function getFirstPeriod(day) {
  return Object.values(day)[0][0]
}

function getLastPeriod(day) {
  return Object.values(day)[Object.keys(day).length - 1][1]
}

function getProgress(time, value) {
    var block_length = parseInt((value[1] - value[0])/1000)/60
    var progress = parseInt((time - value[0])/1000)/60

    return Math.round(progress / block_length * 100)
}

function getBlock(time) {
    dayDict = getDayDict(time)
    if (time.getDay() == 0 || time.getDay() == 6) {
      return "Weekend";
    }
    else if (time < getFirstPeriod(dayDict))
    {
      return "School hasn't started";
    }
    else if (time > getLastPeriod(dayDict))
    {
      return "School is over";
    }
    else {
        let i = 0
        for (const [key, value] of Object.entries(dayDict)) {
            if (time > value[1]) {
                document.getElementById("block" + i.toString()).style.backgroundColor = "rgba(1, 114, 0, 0.5)"
            }
            else if (time >= value[0] && time < value[1]) {
                progress = getProgress(time, value)
                document.getElementById("block" + i.toString()).style.background = "rgba(1, 254, 0, 0.8)"
                return "Block: " + key;
            }
            i++
        }
    }
}

function tick() {
    let time = new Date();
    document.getElementById("clock").innerHTML = getCurrentTime(time);
    // document.getElementById("date").innerHTML = time.toDateString();
    document.getElementById("block").innerHTML = getBlock(time);
    document.title = getBlock(time)
}

function drawDivs() {
    if (now.getDay() != 0 && now.getDay() != 6) {
        let i = 0;
        for (const [key, value] of Object.entries(getDayDict(now))) {
            var block_container = document.createElement('div');
            block_container.classList.add('block-container');
            block_container.id = "block-container" + i.toString();
            document.body.appendChild(block_container);

            var block_time = document.createElement('div');
            block_time.classList.add('block-time');
            block_time.innerText = getTime(value[0]) + " - " + getTime(value[1]);
            document.getElementById("block-container" + i.toString()).appendChild(block_time);

            var block = document.createElement('div');
            block.classList.add('block');
            block.innerText = key;
            block.id = "block" + i.toString();
            document.getElementById("block-container" + i.toString()).appendChild(block);

            i++;
        }   
    }
}

drawDivs();
tick();
setInterval(tick, 1000);
