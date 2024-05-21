document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('videoModal');
    const closeBtn = document.querySelector('.close-btn');
    const videoFrame = document.getElementById('videoFrame');
    const contentArea = document.getElementById('contentArea');
    const modalContent = document.querySelector('.modal-content');

    document.querySelectorAll('.open-modal-btn').forEach(button => {
        button.addEventListener('click', () => {
            const videoUrl = button.getAttribute('data-video');
            const content = button.getAttribute('data-content');
            const type = button.getAttribute('data-type');

            if (type === 'content') {
                contentArea.innerHTML = content;
                videoFrame.style.display = 'none';
                contentArea.style.display = 'block';
            } else if (videoUrl) {
                videoFrame.src = videoUrl;
                videoFrame.style.display = 'block';
                contentArea.style.display = 'none';
            }

            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Закриття модального вікна при натисканні на пусте місце на телефоні
    modal.addEventListener('click', (event) => {
        if (!modalContent.contains(event.target)) {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        videoFrame.src = '';
        contentArea.innerHTML = '';
    }
});
