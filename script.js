const video = document.getElementById('myVideo');

// Funkcja przewijania o podaną liczbę sekund
function skip(seconds) {
    if (video) {
        video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + seconds));
    }
}

// Like toggle
let liked = false;
let likes = 0;
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');

likeBtn.onclick = () => {
    liked = !liked;
    likes += liked ? 1 : -1;
    likeCount.textContent = likes;
    likeBtn.style.background = liked ? "#1e7e34" : "#28a745";
};

// Subskrypcja toggle z potwierdzeniem
let subscribed = false;
let subs = 0;
const subBtn = document.getElementById('subBtn');
const subCount = document.getElementById('subCount');

subBtn.onclick = () => {
    if (!subscribed) {
        const confirmSub = confirm("Czy na pewno chcesz zasubskrybować ten kanał?");
        if (confirmSub) {
            subscribed = true;
            subs++;
            subCount.textContent = subs;
            subBtn.style.background = "#e0a800";
        }
    } else {
        subscribed = false;
        subs--;
        subCount.textContent = subs;
        subBtn.style.background = "#ffc107";
    }
};