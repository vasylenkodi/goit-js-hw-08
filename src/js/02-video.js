import Player from '@vimeo/player';

const vimeoPlayer = document.querySelector('#vimeo-player');

const throttle = require('lodash.throttle');
const player = new Player(vimeoPlayer);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);

player.on("timeupdate", throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
    console.log(event.seconds);
    localStorage.setItem("videoplayer-current-time", event.seconds);
}