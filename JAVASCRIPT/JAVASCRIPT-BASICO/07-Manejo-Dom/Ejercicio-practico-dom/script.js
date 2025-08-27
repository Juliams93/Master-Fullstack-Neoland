const headerImages = [
    'https://picsum.photos/id/1015/600/300',
    'https://picsum.photos/id/1025/600/300',
    'https://picsum.photos/id/1035/600/300'
];

const galleryImages = [
    { url: 'https://picsum.photos/id/1045/300/200', desc: 'Paisaje de montaña' },
    { url: 'https://picsum.photos/id/1055/300/200', desc: 'Río al atardecer' },
    { url: 'https://picsum.photos/id/1065/300/200', desc: 'Bosque en primavera' },
    { url: 'https://picsum.photos/id/1075/300/200', desc: 'Ciudad nocturna' },
    { url: 'https://picsum.photos/id/1085/300/200', desc: 'Playa soleada' }
];

window.addEventListener('DOMContentLoaded', () => {
    // Header aleatorio solo al cargar la página
    const headerContainer = document.getElementById('main-header');
    const headerImg = document.createElement('img');
    headerImg.width = 600;
    headerImg.height = 300;
    headerImg.alt = 'Imagen destacada';
    headerContainer.appendChild(headerImg);

    const randomHeaderIndex = Math.floor(Math.random() * headerImages.length);
    headerImg.src = headerImages[randomHeaderIndex];

    // Galería
    const gallery = document.getElementById('gallery');
    galleryImages.forEach(item => {
        const card = document.createElement('div');
        card.className = 'gallery-card';

        const img = document.createElement('img');
        img.src = item.url;
        img.alt = item.desc;
        img.width = 300;
        img.height = 200;
        img.onclick = () => showModal(item.url, item.desc);

        const desc = document.createElement('p');
        desc.textContent = item.desc;

        card.appendChild(img);
        card.appendChild(desc);
        gallery.appendChild(card);
    });
});

// Modal para ampliar imagen
function showModal(url, desc) {
    let modal = document.getElementById('img-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'img-modal';
        modal.style.position = 'fixed';
        modal.style.top = 0;
        modal.style.left = 0;
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.background = 'rgba(0,0,0,0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = 1000;
        modal.innerHTML = `
            <div style="background:#fff;padding:20px;border-radius:8px;position:relative;">
                <img src="${url}" alt="${desc}" style="max-width:90vw;max-height:80vh;">
                <p>${desc}</p>
                <button id="close-modal" style="position:absolute;top:10px;right:10px;">Cerrar</button>
            </div>
        `;
        document.body.appendChild(modal);
        document.getElementById('close-modal').onclick = () => modal.remove();
        modal.onclick = e => { if (e.target === modal) modal.remove(); };
    }
}
