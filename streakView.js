const dailyTasksData = [
    {
        id: "exercise-streak", 
        color: "#FFFF00", 
        streakData: [] 
    },
    {
        id: "abstinence-streak",
        color: "#EE82EE",
        streakData: []
    },
    {
        id: "programming-streak",
        color: "#39FF14",
        streakData: []
    },
    {
        id: "checking-emails-streak",
        color: "#00FFFF",
        streakData: []
    },
    {
        id: "future-idealization-streak",
        color: "#FFA500",
        streakData: []
    }
];

function renderStreakView(task) {
    const streakView = document.getElementById(task.id);
    streakView.innerHTML = '';
    task.streakData.forEach(() => {
        const streakItem = document.createElement('div');
        streakItem.classList.add('streak-item');
        streakView.appendChild(streakItem);
    });
}

function addStreak(task) {
    task.streakData.push(true);
    renderStreakView(task);
}

function resetStreak(task) {
    task.streakData = [];
    renderStreakView(task);
}

// Initial rendering of the streak views
dailyTasksData.forEach((task) => {
    renderStreakView(task);
});
