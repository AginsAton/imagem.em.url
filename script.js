// Seleciona elementos HTML
const profileImage = document.getElementById('profile-image');
const fileInput = document.getElementById('file-input');
const changePhotoBtn = document.getElementById('change-photo-btn');

// Evento de clique no botão "Alterar Foto"
changePhotoBtn.addEventListener('click', () => {
    fileInput.click();
});

// Evento de mudança de arquivo de input de arquivo
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            profileImage.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
});
