const allAlbumsCovers = [
    {AlbumImage: 'https://images2.imgbox.com/7f/ee/p27wzFJg_o.jpg', AlbumName: 'Kids See Ghosts'},
    {AlbumImage: 'https://images2.imgbox.com/e6/5b/MY6T2p6a_o.jpg', AlbumName: 'To Pimp A Butterfly'}, 
    {AlbumImage: 'https://images2.imgbox.com/4c/c3/kKtDYoHn_o.jpg', AlbumName: '808s & Heartbreak'},
    {AlbumImage: 'https://images2.imgbox.com/b1/e7/VQpyBt00_o.jpg', AlbumName: 'Because The Internet'},
    {AlbumImage: 'https://images2.imgbox.com/fa/29/9L5kcvW8_o.jpg', AlbumName: 'Black On Both Sides'},
    {AlbumImage: 'https://images2.imgbox.com/5a/8a/4HiOgPDO_o.jpg', AlbumName: 'Circles'},
    {AlbumImage: 'https://images2.imgbox.com/67/e0/DjD114yZ_o.jpg', AlbumName: 'College Dropout'},
    {AlbumImage: 'https://images2.imgbox.com/54/3a/JadlihvE_o.jpg', AlbumName: 'Good Kid Maad City'},
    {AlbumImage: 'https://images2.imgbox.com/59/df/Gari6T5l_o.jpg', AlbumName: 'The Forever Story'},
    {AlbumImage: 'https://images2.imgbox.com/4b/83/QP53Fh1n_o.jpg', AlbumName: 'Stankonia'},
    {AlbumImage: 'https://images2.imgbox.com/b2/d6/x7PNCUYa_o.jpg', AlbumName: 'Madvillainy'},
    {AlbumImage: 'https://images2.imgbox.com/fe/09/LX5oLCAD_o.jpg', AlbumName: 'Melt My Eyez See Your Future'}
 ]

let randomIndex = Math.floor( Math.random() * allAlbumsCovers.AlbumImage);
const randomCover = allAlbumsCovers[randomIndex];
const imagePlaceHolder = document.getElementById('imagePlaceHolder');

const coverAlbum = document.createElement('img');
coverAlbum.src = randomCover;
imagePlaceHolder.appendChild(coverAlbum);


console.log(randomCover);

function checkAnswer() {
    let correctAnswer = allAlbumsCovers[randomIndex].AlbumName
    let userInput = document.getElementById("guess");
    document.getElementById('guess').value = '';
    if (userInput.value !== correctAnswer) {
        return false;
    } else {
        return true;
    }
}

function correct() {
    let correctMessage = document.getElementById('correctMessage')
    correctMessage.innerHTML = "CORRECT!"
}

function incorrect() {
    let incorrectMessage = document.getElementById('incorrectMessage')
    incorrectMessage.innerHTML = "TRY AGAIN!"
}
    