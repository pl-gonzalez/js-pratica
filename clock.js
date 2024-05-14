function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM"
    hours = hours % 12 || 12
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`

    document.querySelector('#clock').textContent = timeString
}

setInterval(updateClock, 1000)

/** HTML for this JS:
 * 
 * <div id="clock-container">
        <div class="" id="clock">00:00:00</div>
    </div>
 */