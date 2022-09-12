import readlineSync from 'readline-sync';

export const getRandomInt = (tmin, tmax) => {
    const min = Math.ceil(tmin);
    const max = Math.floor(tmax);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const sayWelcome = () => {
    console.log('Welcome to the Brain Games!');
};

export const askPlayerName = () => readlineSync.question('May I have your name? ');
