const noButton = document.getElementById('no');

noButton.addEventListener('mouseover', () => {
    noButton.style.position = 'absolute';
    noButton.style.left = `${Math.random() * (window.innerWidth - noButton.offsetWidth)}px`;
    noButton.style.top = `${Math.random() * (window.innerHeight - noButton.offsetHeight)}px`;
});
