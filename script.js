document.addEventListener('click', e => {
    if(e.target.innerText.length === 1) {
        let sound = document.getElementById(e.target.innerText);
        sound.play();
    }    
});