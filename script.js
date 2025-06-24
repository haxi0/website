const images = [
    document.getElementById('image1'),
    document.getElementById('image2')
];
const defaultButtons = document.querySelector('.default-buttons');
const telegramButton = document.querySelector('.telegram-button');
const welcomeText = document.getElementById('welcome-text');
let currentIndex = 0;

function toggleContent() {
    const showTelegram = currentIndex === 1;
    defaultButtons.style.display = showTelegram ? 'none' : 'flex';
    telegramButton.style.display = showTelegram ? 'flex' : 'none';
    welcomeText.textContent = showTelegram 
        ? "Welcome to yureek's website" 
        : "Welcome to haxi0's website";
}

function startShaking() {
    images.forEach(img => img.classList.add('shaking'));
    
    setTimeout(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
        toggleContent();
    }, 750);
}

function stopShaking() {
    images.forEach(img => img.classList.remove('shaking'));
}

function fullCycle() {
    startShaking();
    setTimeout(stopShaking, 1500);
    setTimeout(fullCycle, 4500);
}

toggleContent();
setTimeout(fullCycle, 3000);