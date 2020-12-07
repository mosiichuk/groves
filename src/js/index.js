document.addEventListener("DOMContentLoaded", () => {
    initPopups();
});

function initPopups() {
    const backdrop = document.getElementById('backdrop');
    const modal = document.getElementById('video-modal');
    const videoIFrame = document.getElementById('video');
    const closeModalButton = document.querySelector(`#video-modal .close`);

    const videoTogglers = document.querySelectorAll("[data-toggle=\"video-modal\"]");

    if (!videoTogglers || videoTogglers.length === 0)
        return;

    videoTogglers.forEach(openModalButton => {
        const videoSource = openModalButton.dataset.video;

        openModalButton.addEventListener('click', () => {
            if (videoIFrame)
                videoIFrame.contentWindow.location.replace(videoSource);

            openModal(modal, backdrop);
        });
    });

    modal.addEventListener('click', (event) => {
        if (event.target !== modal)
            return;

        if (videoIFrame)
            videoIFrame.contentWindow.location.replace('');

        closeModal(modal, backdrop);
    });


    closeModalButton.addEventListener('click', () => {
        if (videoIFrame)
            videoIFrame.contentWindow.location.replace('');

        closeModal(modal, backdrop);
    });
}

function closeModal(modal, backdrop) {
    document.body.classList.toggle('modal-open');
    modal.classList.toggle('show');
    backdrop.classList.toggle('show');
    modal.classList.toggle('d-block');
    backdrop.classList.toggle('d-block');
}

function openModal(modal, backdrop) {
    document.body.classList.toggle('modal-open');
    modal.classList.toggle('d-block');
    modal.offsetHeight;
    backdrop.classList.toggle('d-block');
    backdrop.offsetHeight;
    modal.classList.toggle('show');
    backdrop.classList.toggle('show');
}
