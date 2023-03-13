import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(updateTime, 1000));
function updateTime(data) {
  const currentTime = data.seconds;

  localStorage.setItem('videoplayer-current-time', currentTime);
}
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
