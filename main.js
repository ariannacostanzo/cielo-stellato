const body = document.querySelector('.body');

const numberOfStars = 200;
const maxWidth = 10;
const maxTop = 900;
const maxLeft = 1900;

const logSomething = (something) => console.log(something)

//Genero random width

const getRandomWidth = () => {
    const randomWidth = Math.floor(Math.random() *maxWidth) + 1;
    return randomWidth;
}

//Genero random top position

const getRandomTop = () => {
    const randomTop = Math.floor(Math.random() *maxTop) + 1;
    return randomTop;
}

const getRandomLeft = () => {
    const randomLeft = Math.floor(Math.random() *maxLeft) + 1;
    return randomLeft;
}


for (let i = 0; i < numberOfStars; i++) {
    //creo un tot di stelle
    const star = document.createElement('div');
    star.classList.add('star');
    

    //ottengo dimensioni e posizioni random
    const starWidth = getRandomWidth();
    const starTopPosition = getRandomTop();
    const starLeftPosition = getRandomLeft(); 

    //do ad ogni stella dimensioni e posizioni random
    star.style.width = starWidth +'px';
    star.style.height = starWidth + 'px';
    star.style.top = starTopPosition + 'px';
    star.style.left = starLeftPosition + 'px';
    
    // cambio le dimensioni in css(ho visto che non potevo farlo così, perchè quelle proprietà cambiano una volta per tutto il documento)
    // const root = document.querySelector(':root');
    // root.style.setProperty('--randomWidth', starWidth + 'px');
    // root.style.setProperty('--randomTopPosition', starTopPosition + 'px');
    // root.style.setProperty('--randomLeftPosition', starLeftPosition + 'px');

    logSomething("dimensione: " + starWidth);
    logSomething("posizione top: " +starTopPosition);
    logSomething("posizione left: " + starLeftPosition);

    body.appendChild(star);


}
