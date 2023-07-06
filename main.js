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
    {AlbumImage: 'https://images2.imgbox.com/fe/09/LX5oLCAD_o.jpg', AlbumName: 'Melt My Eyez See Your Future'},
    {AlbumImage: 'https://images2.imgbox.com/51/a3/YY986KBJ_o.jpg', AlbumName: 'Views'},
    {AlbumImage: 'https://images2.imgbox.com/9d/0a/2nzPEdG8_o.jpg', AlbumName: 'The House Is Burning'},
    {AlbumImage: 'https://images2.imgbox.com/02/f7/fz67c9Rc_o.jpg', AlbumName: 'Swimming'},
    {AlbumImage: 'https://images2.imgbox.com/4c/b9/jvWChafz_o.jpg', AlbumName: 'Ramona Park Broke My Heart'},
    {AlbumImage: 'https://images2.imgbox.com/f6/25/D3EX25Ju_o.jpg', AlbumName: 'Rodeo'},
    {AlbumImage: 'https://images2.imgbox.com/4a/7c/VqjfZAIE_o.jpg', AlbumName: 'Pinata'},
    {AlbumImage: 'https://images2.imgbox.com/34/09/dSbgnZJP_o.jpg', AlbumName: 'The Offseason'},
    {AlbumImage: 'https://images2.imgbox.com/b4/d6/Sc3ZFoza_o.jpg', AlbumName: 'Man On The Moon'},
    {AlbumImage: 'https://images2.imgbox.com/50/2a/brlgEcCI_o.jpg', AlbumName: 'Luv Is Rage 2'},
    {AlbumImage: 'https://images2.imgbox.com/19/e4/cMB9crMU_o.jpg', AlbumName: 'Legends Never Die'},
    {AlbumImage: 'https://images2.imgbox.com/cf/ee/4AvHFFyu_o.jpg', AlbumName: 'Heroes & Villains'},
    {AlbumImage: 'https://images2.imgbox.com/10/33/dhuIuQSI_o.jpg', AlbumName: 'Flower Boy'},
    {AlbumImage: 'https://images2.imgbox.com/35/55/5w4A9hEf_o.jpg', AlbumName: 'Drill Music In Zion'},
    {AlbumImage: 'https://images2.imgbox.com/ba/3f/9eFFHGK7_o.jpg', AlbumName: 'Coloring Book'},
    {AlbumImage: 'https://images2.imgbox.com/3b/bd/AX4QK8vH_o.jpg', AlbumName: 'Business Is Business'}
 ]


let randomIndex = Math.floor( Math.random() * allAlbumsCovers.length);
let randomCover = allAlbumsCovers[randomIndex].AlbumImage;
let imagePlaceHolder = document.getElementById('imagePlaceHolder');
let score = 0;
let oldScore = 0;

let coverAlbum = document.createElement('img');
coverAlbum.src = randomCover;
imagePlaceHolder.appendChild(coverAlbum);


function checkAnswer() {
    let userInput = document.getElementById("guess").value;
    let correctAnswer = allAlbumsCovers[randomIndex].AlbumName;
    if (userInput === correctAnswer) {
        correct();
    } else {
        incorrect();
    }
    document.getElementById('guess').value = '';
    event.preventDefault();
}

function correct() {
    let correctMessage = document.getElementById('correctMessage')
    correctMessage.textContent = "CORRECT!"
    score++;
    document.getElementById('score').textContent = "Score: " + score;
    setTimeout(() => correctMessage.textContent = '', 3000 )
    initNewPage();
}

function incorrect() {
    let incorrectMessage = document.getElementById('incorrectMessage')
    incorrectMessage.textContent = "TRY AGAIN!"
    oldScore = score;
    score = 0;
    setTimeout(() => incorrectMessage.textContent = '', 3000 )
}

function initNewPage() {
    imagePlaceHolder.removeChild(coverAlbum);
    console.log(allAlbumsCovers.length);
    allAlbumsCovers.splice[randomIndex];
    console.log(allAlbumsCovers.length);
    randomIndex = Math.floor( Math.random() * allAlbumsCovers.length);
    randomCover = allAlbumsCovers[randomIndex].AlbumImage;
    imagePlaceHolder = document.getElementById('imagePlaceHolder');

    coverAlbum = document.createElement('img');
    coverAlbum.src = randomCover;
    imagePlaceHolder.appendChild(coverAlbum);
}

