let streakData = [];

function addStreak() {
    streakData.push(true);
    renderStreakView();
}

function resetStreak() {
    streakData = [];
    renderStreakView();
}

function renderStreakView() {
    const streakView = document.getElementById('streak-view');
    streakView.innerHTML = '';
    streakData.forEach(() => {
        const streakItem = document.createElement('div');
        streakItem.classList.add('streak-item');
        streakView.appendChild(streakItem);
    });
}

renderStreakView();