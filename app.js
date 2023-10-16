const music =document.querySelector("audio");
const img =document.querySelector("img");
const play =document.getElementById("play");
const artist =document.getElementById("artist");
const title =document.getElementById("title");
const prev =document.getElementById("prev");
const next =document.getElementById("next");

const songs =[
    {
    name: "image_1",
    title: "AATHMA RAAMA",
    artist:"BRODHA V"

  },
  {
    name: "image_2",
    title: "BLINDING LIGHTS",
    artist:"THE WEEKENDS"
  },
  {
    name: "image_3",
    title: "HYMN ",
    artist:"THE WEEKENDS"
  },
];

let isPlaying = false;

// for play function

const playMusic = () =>{
    isPlaying= true;
    music.play();
    play.classList.replace('fa-play',"fa-pause");
    img.classList.add("anime");

};

// for pause function 

const pauseMusic = () =>{
    isPlaying= false;
    music.pause();
    play.classList.replace("fa-pause" , "fa-play");
    img.classList.remove("anime");
};

play.addEventListener('click', () =>{
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic()
    }
});

 // changing the music data 
const loadSong =(songs) => {
    title.textContent = songs.title;  
    artist.textContent = songs.artist; 
    music.src = "music/" +songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg ";
}; 



songIndex = 0 ;

const nextSong =() => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();

};
const prevSong =() => {
    songIndex = (songIndex -  1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();

};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

