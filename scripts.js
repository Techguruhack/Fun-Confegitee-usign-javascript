document.getElementById('confettiButton').addEventListener('click', createConfetti);

function createConfetti() {
  const confettiContainer = document.getElementById('confettiContainer');
  const emojis = ['🎉', '✨', '🎊', '💖', '💥', '🎈', '🌟', '🥳', '🪅'];

  for (let i = 0; i < 100; i++) {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDelay = Math.random() * 2 + 's';
    confettiContainer.appendChild(emoji);
  }

  setTimeout(() => {
    confettiContainer.innerHTML = '';
  }, 5000);
}

const style = document.createElement('style');
style.innerHTML = `
  .emoji {
    position: absolute;
    font-size: 24px;
    animation: fall 3s linear infinite;
    will-change: transform;
  }

  @keyframes fall {
    0% {
      transform: translateY(-100vh) rotate(0deg);
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
    }
  }
`;
document.head.appendChild(style);
