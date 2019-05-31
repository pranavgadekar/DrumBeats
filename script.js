window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            beatBubble();
        });
    });


    const beatBubble = () => {
        var bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = "black";
        bubble.style.animation = "jump 1s ease";

        bubble.addEventListener('animationend', function(){
            this.remove();
        });
    };

});