import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const vimeoPlayer = new Player('vimeo-player');
const key = 'videoplayer-current-time';
const savedTime = localStorage.getItem(key);

function onVimeoPlayerTimeupdate(data) {
  const { seconds } = data;
  localStorage.setItem(key, seconds);
}

vimeoPlayer.on('timeupdate', throttle(onVimeoPlayerTimeupdate, 1000));
vimeoPlayer.setCurrentTime(savedTime);
