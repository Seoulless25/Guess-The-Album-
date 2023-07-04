const albumsHipHop = [
   'https://i.imgur.com/nw1NWlL.jpg',
   'https://i.imgur.com/38KiZpy.jpg',
   'https://i.imgur.com/EECQlve.jpg',
]

function selectRandomAlbum() {
    randomIndex = Math.floor(Math.random() * albumsHipHop.length);

    selectedImage = albumsHipHop[randomIndex]

    document.getElementById('').src = ''
}