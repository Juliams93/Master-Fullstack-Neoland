const fotoBanner = document.getElementById("fotoBanner"); /*Esto sirve para obtener la referencia del index */
const galeria = document.getElementById("galeria");

/* Esto es un array de objetos que representan las fotos del banner en la cabecera */
const arrayBanners = [
    {src: 'assets/fotos-banner/1.jpeg', alt: 'Foto 1'},
    {src: 'assets/fotos-banner/2.jpeg', alt: 'Foto 2'},
    {src: 'assets/fotos-banner/3.jpeg', alt: 'Foto 3'},
    {src: 'assets/fotos-banner/4.jpeg', alt: 'Foto 4'},
    {src: 'assets/fotos-banner/5.jpeg', alt: 'Foto 5'},
]
/*Esto es un array de objetos que representan las fotos del banner */
const arrayFotos = [
    {src: 'assets/fotos-galeria/1.jpeg', alt: 'Foto 1', pie_de_foto: 'Este es el pie de foto del paisaje 1'},
    {src: 'assets/fotos-galeria/2.jpeg', alt: 'Foto 2', pie_de_foto: 'Este es el pie de foto del paisaje 2'},
    {src: 'assets/fotos-galeria/3.jpeg', alt: 'Foto 3', pie_de_foto: 'Este es el pie de foto del paisaje 3'},
    {src: 'assets/fotos-galeria/4.jpeg', alt: 'Foto 4', pie_de_foto: 'Este es el pie de foto del paisaje 4'},
    {src: 'assets/fotos-galeria/5.jpeg', alt: 'Foto 5', pie_de_foto: 'Este es el pie de foto del paisaje 5'},
]


const pintarBanner = () => {
    const index = Math.floor(Math.random() * arrayBanners.length);
    console.log(index)
    fotoBanner.src = arrayBanners[index].src;
    fotoBanner.alt = arrayBanners[index].alt;
}

const pintarGaleria = () => {
    // Limpiar galería primero
    galeria.innerHTML = '';
    
    arrayFotos.forEach((item) => {
        // Crear estructura de card como en el CSS
        const card = document.createElement('div');
        card.className = 'card';
        
        const imagen = document.createElement("img");
        imagen.src = item.src;
        imagen.alt = item.alt;
        
        const description = document.createElement("div");
        description.className = 'card-description';
        description.textContent = item.pie_de_foto;

        card.append(imagen, description);
        galeria.append(card);
    });
}

pintarBanner();
pintarGaleria();