//Fetch request

fetch("http://localhost:3000/Songs")
  .then((r) => r.json())
  .then((songArray) => {
    songArray.forEach(renderSong);
  });

  fetch("http://localhost:3000/Songs/1")
  .then((r) => r.json())
  .then((firstSong) => {
    detailSongImg.src = firstSong.image
    detailSongName.innerText = firstSong.name
    detailSongArtist.innerText = firstSong.artist
  })

// style.css.disable = true 
const form = document.getElementById("newsongform");

//global variables
const songNameContainer = document.getElementById("songname");
const detailSongImg = document.getElementById("detailsongimage");
const detailSongName = document.getElementById("detailsongname");
const detailSongArtist = document.getElementById("detailartist");
const linkElement = document.createElement('a')
const textGetter = document.querySelectorAll('.text')

//Submit form Evenet listener
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
  const songUrl= songObj.url
  newLi.append(songName);

  newLi.addEventListener("click", () => {
    linkElement.href=songUrl
    detailSongName.innerText = songObj.url;
    detailSongName.textContent=songObj.name
    detailSongArtist.innerText= songObj.artist;
    detailSongImg.src = songObj.image;
  });
}
    const body = document.body
    const images= [
      'https://img.freepik.com/free-vector/low-poly-white-subtle-colors-background_1017-33838.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkFQOE3EJaOnklldt66VosOMn6QFw71_lEA&usqp=CAUhttps://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA6QMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAACAQADB//EACYQAQEBAQABAwIGAwAAAAAAAAABEfAhAjFBUcFhcYGRseESodH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APITgQ/SBQoMKAcKBCgHD+HOOkvju79wsP0hD9PgDhTO7v5Mvn5X5A4UCFoH3d9Uud3eE3u/RtAbmUbc/Tu7EFBN/IKVG0BvuNK3u77mgFGnQoBRp0KCUKY0A+WaoDQpQhQDhwIUA4UCFAOUpRKeAP2pShL4LQdIoSrLlB09NXQlXu7+wW1b6r3d/A7u/raC6lRPbu7/AEGv0+gW93fe293fc2glH1eCt8jfYBtGraIJQKiA0ato0ERqwJClAoBwoMKARyhFgOkX2CUwKUvTQ+F3AdZfK+3s5ylL+IHL4Xe7vsN2NoHrb+I758tbJ3dgL8onwlv1BrUrXMG0Go2slBBvhfVco0Eo1aNBKNWjQGo1b9v3BIUCFAdIWuZQDl8FAhSgerPYIU9gPSCVZQOUpQlbQPW0dad3f8Dpqb3d9zamgUrWpL3d+Y7MAtFNS0Ft8DWvsNoLQ1tQGtGrRtBLRZKCVNaoDQtCKIelA0pRTWBKUoHClCVYB6soRdB01glX/ID1XPV0C8t5HWtAmHU0C1NTU0GtStR0GqayWgnqo3VtG0EqLR0GqIwJKQSrKIcXQKClKQSlKBQtDV0D1YC6B6svgNXQNtDV0CbR1tBbW0dbQXWTUtBbRRLQWjragNala0aDaNq0fkGqNagIsDSghylK5ylKB6uhqgerKEUU9LXOLKB6uhraBaWg2gWto62gepaOpoFvhNTU0CtTU1NBrU1qlojUbWvsgNqNRoqpqIIiyioHKuhKsoHKoyrAOLrnpaKUq6Mq6Ba24OroFraOsBa2iwFraOpoFa2i2guoiWiLalqalBbR1tSg1qayUEZmBGZgWLosByroKBqC6B7jbo6u4BRtG1ZQLW0dbRS1tHW0C1h1tEXWFtBdS1NQFa0dbQbUtbUBtZGBWZgRmYGZmBlRgVYzAqswMzMCszAzMwMisCbWZgapWYEqVGBmZgZmYFjMwP/Z',
    ]
    let currentImageIndex = 0;

    function changeBackgroundImage(){
      body.style.backgroundImage = `url(${images[currentImageIndex]})`;
      currentImageIndex = (currentImageIndex +1)%images.length
    }

    const colors=[
      'black',
      'green']
    let currentColorIndex = 0;

    function changeTextColor(){
      textGetter.forEach((text) => {

        text.style.color = colors[currentColorIndex]

         });
      currentColorIndex = (currentColorIndex +1)%colors.length
     
    }

document.addEventListener('keypress', (e) => {
  if(e.key === '`') {
    changeBackgroundImage();
    changeTextColor();
    }
  }
)
changeBackgroundImage();
changeTextColor();
