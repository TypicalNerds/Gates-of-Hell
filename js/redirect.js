function playVideo(){
    var video = document.getElementById('video');
    video.play();
    video.addEventListener('ended',function(){
        window.location = 'https://www.google.co.uk/maps/place/Paris,+France/';
    });
}