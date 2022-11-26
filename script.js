console.log("Welcome to spotify");

//Initialize the variables
let SongIndex = 0;
let audioElement = new Audio('Faded.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let Songs = [
    { songName: "Faded", filepath: "Faded.mp3" },
    { songName: "Baby", filepath: "Baby.mp3" },
    { songName: "Changes", filepath: "Changes.mp3" },
    { songName: "Friends", filepath: "Friends.mp3" },
]


// audioElement.play();

//Handle play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

//Listen to events:
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //Update Seekbaar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})