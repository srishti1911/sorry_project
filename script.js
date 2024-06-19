document.getElementById('sorryButton').addEventListener('click', function() {
    const sorryMessage = document.getElementById('sorryMessage');
    const teddyBear = document.getElementById('teddyBear');
    sorryMessage.classList.add('animate');
    teddyBear.classList.add('animate');
    // Open YouTube link after animation
    setTimeout(() => {
        window.open('https://www.youtube.com/watch?v=7PpVmIXBKio', '_blank');
    }, 2000); // Delay for animation to complete
});

