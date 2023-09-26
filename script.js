//Fetch request

fetch("http://localhost:3000/Songs")
  .then((r) => r.json())
  .then((songArray) => {
    // loadDisplay()
    songArray.forEach(renderSong);
  });
//function loadDisplay() {
  fetch("http://localhost:3000/Songs/1")
  .then((r) => r.json())
  .then((firstSong) => {
    detailSongImg.src = firstSong.image
    detailSongName.innerText = firstSong.name
  })
//}

// style.css.disable = true 
const form = document.getElementById("newsongform");

//global variables
const songNameContainer = document.getElementById("songname");
const detailSongImg = document.getElementById("detailsongimage");
const detailSongName = document.getElementById("detailsongname");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newSong = e.target.songname.value;
  const newArtistName = e.target.artist.value;
  const newImage = e.target.image.value;

  const newSongObj = {
    name: newSong,

    artist: newArtistName,

    image: newImage,
  };

  renderSong(newSongObj);
});

function renderSong(songObj) {
  const newLi = document.createElement("li");

  const songName = songObj.name;

  songNameContainer.append(newLi);

  newLi.append(songName);

  newLi.addEventListener("click", () => {
  

    detailSongName.innerText = songObj.name;

    
    detailSongImg.src = songObj.image;
  });

  const videoUrl = document.getElementById("videourl");
}

document.addEventListener('keypress', (e) => {
  if(e.key === '`') {
    const body = document.body
    body.style.backgroundColor = 'black'

    songNameContainer.style.color='green'
    form.style.color='green'

    const textGetter = document.querySelectorAll('.text')
    textGetter.forEach ((element) => {
      element.style.color='green'
    })
  }
})