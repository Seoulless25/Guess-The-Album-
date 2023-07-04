const allAlbumsCovers = [
    'https://imgbox.com/p27wzFJg',
    'https://images2.imgbox.com/e6/5b/MY6T2p6a_o.jpg'
 ]

let randomIndex = Math.floor( Math.random() * allAlbumsCovers.length);
const randomCover = allAlbumsCovers[randomIndex];
const imagePlaceHolder = document.getElementById('imagePlaceHolder');

const coverAlbum = document.createElement('img');
coverAlbum.src = randomCover;
imagePlaceHolder.appendChild(coverAlbum);


console.log(randomCover);
