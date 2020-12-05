document.addEventListener("DOMContentLoaded", () => {
    initPopups();
});

function initPopups() {
    const backdrop = document.getElementById('backdrop');

    document.querySelectorAll("[data-toggle=\"modal\"]").forEach(openModalButton => {
        const modal = document.querySelector(openModalButton.dataset.target);
        const closeModalButton = document.querySelector(`${openModalButton.dataset.target} .close`);

        openModalButton.addEventListener('click', () => {
            openModal(modal, backdrop);
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal)
                closeModal(modal, backdrop);
        })

        closeModalButton.addEventListener('click', () => {
            closeModal(modal, backdrop);
        });
    })
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
