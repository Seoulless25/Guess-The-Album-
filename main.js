const allAlbumsCovers = [
    'https://images2.imgbox.com/7f/ee/p27wzFJg_o.jpg',
    'https://images2.imgbox.com/e6/5b/MY6T2p6a_o.jpg',
    'https://images2.imgbox.com/4c/c3/kKtDYoHn_o.jpg',
    'https://images2.imgbox.com/b1/e7/VQpyBt00_o.jpg',
    'https://images2.imgbox.com/fa/29/9L5kcvW8_o.jpg',
    'https://images2.imgbox.com/5a/8a/4HiOgPDO_o.jpg',
    'https://images2.imgbox.com/67/e0/DjD114yZ_o.jpg',
    'https://images2.imgbox.com/54/3a/JadlihvE_o.jpg',
    'https://images2.imgbox.com/59/df/Gari6T5l_o.jpg',
    'https://images2.imgbox.com/4b/83/QP53Fh1n_o.jpg',
    'https://images2.imgbox.com/b2/d6/x7PNCUYa_o.jpg',
    'https://images2.imgbox.com/fe/09/LX5oLCAD_o.jpg',
 ]

let randomIndex = Math.floor( Math.random() * allAlbumsCovers.length);
const randomCover = allAlbumsCovers[randomIndex];
const imagePlaceHolder = document.getElementById('imagePlaceHolder');

const coverAlbum = document.createElement('img');
coverAlbum.src = randomCover;
imagePlaceHolder.appendChild(coverAlbum);


console.log(randomCover);
