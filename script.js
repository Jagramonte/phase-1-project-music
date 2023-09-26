//Fetch request

fetch("http://localhost:3000/Songs")
  .then((r) => r.json())
  .then((songArray) => {
    songArray.forEach(renderSong);
  });

const form = document.getElementById("newsongform");

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

  const songNameContainer = document.getElementById("songname");

  const songName = songObj.name;

  songNameContainer.append(newLi);

  newLi.append(songName);

  newLi.addEventListener("click", () => {
    const detailSongName = document.getElementById("detailsongname");

    detailSongName.innerText = songObj.name;

    const detailSongImg = document.getElementById("detailsongimage");
    detailSongImg.src = songObj.image;
  });

  const videoUrl = document.getElementById("videourl");
}
