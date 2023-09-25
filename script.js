//Fetch request
fetch("http://localhost:3000/Songs")
  .then((r) => r.json())
  .then((songArray) => {
    songArray.forEach(renderSong);
  });

function renderSong(songObj) {
  const newLi = document.createElement("li");

  const songNameContainer = document.getElementById("songname");

  const songName = songObj.name;

  songNameContainer.append(newLi);

  newLi.append(songName);

  const videoUrl = document.getElementById("videourl");
}
