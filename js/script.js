// tres constante para referenciar os ID dos Iframes
const album = document.getElementById('album');
const livre = document.getElementById('livre');
const gerar = document.getElementById('gerar');

// tres constante para referenciar os ID dos Iframes
const videoAlbum = document.querySelector('#videoAlbum');
const videoLivre = document.querySelector('#videoLivre');
const gerarMusica = document.querySelector('#gerarMusica');

//evento do click
album.addEventListener('click', () =>{
    // para DIV
    album.classList.toggle('active');
    // para iFrame
    videoAlbum.classList.toggle('active');
}); 
livre.addEventListener('click', () =>{
    livre.classList.toggle('active');
    videoLivre.classList.toggle('active');
});
gerar.addEventListener('click', () =>{
    gerar.classList.toggle('active');
    gerarMusica.classList.toggle('active');
});