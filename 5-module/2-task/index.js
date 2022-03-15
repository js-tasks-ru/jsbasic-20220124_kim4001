function toggleText() {
    let buttonToggle = document.querySelector(`.toggle-text-button`);
    buttonToggle.addEventListener('click', function() {
        let textHidden = document.querySelector('#text');
        textHidden.hidden = !textHidden.hidden;

    })
}
