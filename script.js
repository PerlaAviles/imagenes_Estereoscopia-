const imagesData = {
    personal: [
        { anaglyph: 'anaglifo1.jpg', left: 'left1.jpg', right: 'right1.jpg', caption: 'Foco cercano' },
        { anaglyph: 'anaglifo2.jpg', left: 'left2.jpg', right: 'right2.jpg', caption: 'Foco medio' },
        { anaglyph: 'anaglifo3.jpg', left: 'left3.jpg', right: 'right3.jpg', caption: 'Foco lejano' }
    ],
    edificios: [
        { anaglyph: 'anaglifo4.jpg', left: 'left4.jpg', right: 'right4.jpg', caption: 'Foco cercano' },
        { anaglyph: 'anaglifo5.jpg', left: 'left5.jpg', right: 'right5.jpg', caption: 'Foco medio' },
        { anaglyph: 'anaglifo6.jpg', left: 'left6.jpg', right: 'right6.jpg', caption: 'Foco lejano' }
    ],
    objetos: [
        { anaglyph: 'anaglifo7.jpg', left: 'left7.jpg', right: 'right7.jpg', caption: 'Foco cercano' },
        { anaglyph: 'anaglifo8.jpg', left: 'left8.jpg', right: 'right8.jpg', caption: 'Foco medio' },
        { anaglyph: 'anaglifo9.jpg', left: 'left9.jpg', right: 'right9.jpg', caption: 'Foco lejano' }
    ]
};

function updateCarousel(section, index) {
    const container = document.querySelector(`[data-section="${section}"]`);
    const data = imagesData[section][index];
    container.querySelector('img').src = data.anaglyph;
    container.querySelector('.stereo-images img:nth-child(1)').src = data.left;
    container.querySelector('.stereo-images img:nth-child(2)').src = data.right;
    container.querySelector('.caption').textContent = data.caption;
}

function nextImage(section) {
    const container = document.querySelector(`[data-section="${section}"]`);
    let index = parseInt(container.getAttribute('data-index')) || 0;
    index = (index + 1) % imagesData[section].length;
    container.setAttribute('data-index', index);
    updateCarousel(section, index);
}

function prevImage(section) {
    const container = document.querySelector(`[data-section="${section}"]`);
    let index = parseInt(container.getAttribute('data-index')) || 0;
    index = (index - 1 + imagesData[section].length) % imagesData[section].length;
    container.setAttribute('data-index', index);
    updateCarousel(section, index);
}
function openModal(image) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImg.src = image.src;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}
