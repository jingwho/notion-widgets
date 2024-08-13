let countdownDate;
let countdownInterval;

function setCountdown() {
    const goal = document.getElementById('goalInput').value;
    const date = document.getElementById('dateInput').value;
    
    if (!goal || !date) {
        alert('Please enter both a goal and a date.');
        return;
    }

    countdownDate = new Date(date).getTime();
    document.getElementById('goalText').innerText = goal.toUpperCase();
    document.getElementById('setupForm').style.display = 'none';
    document.getElementById('countdownDisplay').style.display = 'flex';
    
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "EXPIRED";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;
}

function resetCountdown() {
    clearInterval(countdownInterval);
    document.getElementById('setupForm').style.display = 'flex';
    document.getElementById('countdownDisplay').style.display = 'none';
    document.getElementById('goalInput').value = '';
    document.getElementById('dateInput').value = '';
}
