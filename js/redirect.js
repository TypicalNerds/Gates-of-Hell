function playVideo(){
    var video = document.getElementById('video');
    video.play();
    video.addEventListener('ended',function(){
        window.location = 'https://www.youtube.com/watch?v=HNApxhvK1Hg';
    });
}
