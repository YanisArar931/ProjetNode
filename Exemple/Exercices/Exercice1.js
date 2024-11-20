const P1 = 13;
const P2 = 9;
const P3 = 8;
const P4 = 8;
const P5 = 5;

const episode = 50;

const sum = P1 + P2 + P3 + P4 + P5;
const ep = sum*episode;
const hours = episode*sum / 60;


console.log('1/ Il y a ' + sum + ' épisodes');
console.log('2/ Pour tous les épisodes, il faudra compter ' + ep + ' minutes');
console.log('3/ En heure, tous les épisodes font ' + hours + ' heures');
console.log('4/ En heure arrondi, tous les épisodes font ' + Math.round(hours) + ' heures')
