
function getE(a){
         return document.getElementById(a);
    };

var target_date = new Date(2016, 3, 21).getTime();

var days, hours, minutes, seconds;

var countdown = getE("countdown");

setInterval(function () {

    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    getE("days").innerHTML = days;
    getE("hours").innerHTML = hours;
    getE("minutes").innerHTML = minutes;
    getE("seconds").innerHTML = seconds;

}, 1000);

