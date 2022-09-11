import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const sayWelcome = () => {
    console.log('Welcome to the Brain Games!');
};

export const askPlayerName = () => {
    return readlineSync.question('May I have your name? ');
};



