function playVideo(){
    var video = document.getElementById('video');
    video.play();
    video.addEventListener('ended',function(){
        window.location = 'https://maps.app.goo.gl/QSncJt6FHUwK99iQ6';
    });
}
