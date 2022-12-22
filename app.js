const container = document.querySelector(".container");
const singerFoto = document.querySelector(".singer-ph");
const sarkiDetay = document.querySelector(".sarki-detay");
const calanName = document.querySelector(".sarki");
const artistAdi = document.querySelector(".artist");
const progressArea = document.querySelector(".progress-area");
const progressBar = document.querySelector(".progress-bar");
const suanCalan = document.querySelector(".suan-calan");
const songTimer = document.querySelector(".song-timer");
// const calanStart = document.querySelector(".baslangic")
// const calanFinish = document.querySelector (".bitis")
const tekrar = document.querySelector("#tekrar");
const geriSar = document.querySelector("#geri-sar");
const playPause = document.querySelector(".play-pause");
const btnPlay = document.querySelector("#oynat");
const ileriSar = document.querySelector("#ileri-sar");
const sarkiList = document.querySelector("#sarkilarim");

const player = new MusicPlayer(musicList);
window.addEventListener("load", () => {
  let music = player.getMusic();
  displayMusic(music);
});

function displayMusic(music) {
  calanName.innerText = music.title;
  artistAdi.innerText = music.singer;
  singerFoto.src = "resimler/" + music.img;
  suanCalan.src = "müzikler/" + music.file;
}

ileriSar.addEventListener("click", () => {
  player.next();
  let music = player.getMusic();
  displayMusic(music);
  playMusic();
});

geriSar.addEventListener("click", () => {
  player.previous();
  let music = player.getMusic();
  displayMusic(music);
  playMusic();
});

btnPlay.addEventListener("click", () => {
  const isMusicplay = container.classList.contains("playing");
  isMusicplay ? pauseMusic() : playMusic();
});

function pauseMusic() {
  container.classList.remove("playing");
  btnPlay.classList = "fa-solid fa-play";
  suanCalan.pause();
}

function playMusic() {
  container.classList.add("playing");
  btnPlay.classList = "fa-solid fa-pause";
  suanCalan.play();
}

suanCalan.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progresswidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progresswidth}%`;

  let musicCurrentTime = container.querySelector(".baslangic");
  musicDuration = container.querySelector(".bitis");

  suanCalan.addEventListener("loadeddata", () => {
    let maiAdDuration = suanCalan.duration;
    let totalMin = Math.floor(maiAdDuration / 60);
    let totalSec = Math.floor(maiAdDuration % 60);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    musicDuration.innerText = `${totalMin}:${totalSec}`;
  });

  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});
progressArea.addEventListener("click", (e) => {
  let progresswidth = progressArea.clientWidth;
  let clickedOffSetX = e.offsetX;
  let songDuration = suanCalan.duration;
  suanCalan.currentTime = (clickedOffSetX / progresswidth) * songDuration;
  playMusic();
});


