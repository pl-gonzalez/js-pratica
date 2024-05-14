// setTimeout(callback , delay)
/**
 * alllows to schedule a function. Execute a function after an amount of time (ms)
 * NOTE: Depending on the workload of the JS runtime envoriment, so its approximately
 */

let timeoutId;

function startTimer() {
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED")
}

function clearTimer() {
    clearTimeout(timeoutId)
    console.log("CLEARED");
}

/** HTML for this JS:
 * <button onclick="startTimer()">START</button>
    <button onclick="clearTimer()">ClEAR</button>
 */