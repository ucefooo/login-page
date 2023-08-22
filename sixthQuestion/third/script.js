function myDigitalClock() {
    let d1 = new Date();
    let hours = d1.getHours();
    let minutes = d1.getMinutes();
    let seconds = d1.getSeconds();
    let zone = "AM";

    if (hours >= 12)
    {
        zone = "PM";
        if (hours > 12)
            hours -= 12;
    }

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let clockDisplay = document.getElementById("hour");
    clockDisplay.innerHTML = `<div>${hours}</div><div class="letters"> H</div>`;
    
    clockDisplay = document.getElementById("minute");
    clockDisplay.innerHTML = `<div>${minutes}</div><div class="letters"> M</div>`;
    
    clockDisplay = document.getElementById("second");
    clockDisplay.innerHTML = `<div>${seconds}</div><div class="letters">S</div>`;
    
    clockDisplay = document.getElementById("zone");
    clockDisplay.innerHTML = zone;

    setTimeout(myDigitalClock, 1000);
}

myDigitalClock()