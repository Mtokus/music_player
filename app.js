const container = document.querySelector(".container")
const singerFoto = document.querySelector(".singer-ph")
const sarkiDetay = document.querySelector(".sarki-detay")
const calanName = document.querySelector(".sarki")
const artistAdi = document.querySelector (".artist")
const progressArea = document.querySelector(".progress-area")
const suanCalan = document.querySelector(".suan-calan")
const songTimer = document.querySelector(".song-timer")
const calanStart = document.querySelector(".baslangic")
const calanFinish = document.querySelector (".bitis")
const tekrar = document.querySelector("#tekrar")
const geriSar = document.querySelector("#geri-sar")
const playPause = document.querySelector(".play-pause")
const btnPlay = document.querySelector("#oynat")
const ileriSar = document.querySelector ("#ileri-sar")
const sarkiList = document.querySelector("#sarkilarim")





const player = new MusicPlayer(musicList);
window.addEventListener("load", () =>{
    let music = player.getMusic();
    displayMusic(music);
});

function displayMusic(music) {
    calanName.innerText = music.title;
    artistAdi.innerText = music.singer;
    singerFoto.src = "resimler/" + music.img;
    suanCalan.src= "müzikler/" + music.file;
}

ileriSar.addEventListener("click",()=>{
    
    player.next();
    let music= player.getMusic();
    displayMusic(music);
    playMusic();

})

geriSar.addEventListener("click",()=>{
    player.previous();
    let music= player.getMusic();
    displayMusic(music);
    playMusic();

})



btnPlay.addEventListener("click" , ()=>{
    const isMusicplay= container.classList.contains("playing");
    isMusicplay ? pauseMusic() : playMusic();

});

function pauseMusic(){

    container.classList.remove("playing");
    btnPlay.classList="fa-solid fa-play";
    suanCalan.pause();
}

function playMusic(){
    container.classList.add("playing");
    btnPlay.classList="fa-solid fa-pause";
    suanCalan.play();
}
