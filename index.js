$(document).ready(function() {
    //Preloader
    preloaderFadeOutTime = 5;
    function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
    });