function acceptCookies() {
    document.getElementById('cookieWall').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('cookieWall').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 500);
}

const movingDiv = document.createElement('div');
movingDiv.className = 'moving-div';
document.body.appendChild(movingDiv);

movingDiv.addEventListener('animationiteration', () => {
    const screenWidth = window.innerWidth;
    const divWidth = movingDiv.offsetWidth;
    const currentLeft = parseInt(movingDiv.style.left) || 0;

    if (currentLeft > screenWidth) {
       
        movingDiv.style.left = `-${divWidth}px`;
    }
});