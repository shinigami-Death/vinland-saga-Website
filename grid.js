
const video = document.querySelector('video');
const volumeButton = document.getElementById('btn');


volumeButton.addEventListener('click', () => {
    
    video.muted = !video.muted;


   
    if (video.muted) {
        volumeButton.style.color = 'red'; 
    } else {
        volumeButton.style.color = 'green'; 
    }
});
