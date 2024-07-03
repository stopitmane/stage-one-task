document.addEventListener('DOMContentLoaded', function() {
    // Update current time in UTC
    const currentTimeUTC = new Date().toUTCString();
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;

    // Update current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayIndex = new Date().getDay();
    const currentDayOfWeek = daysOfWeek[currentDayIndex];
    document.querySelector('[data-testid="currentDay"]').textContent = currentDayOfWeek;
});
