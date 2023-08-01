import './style.css';
import bin from './assets/bin-svgrepo-com.svg';

const myPara = document.createElement('h4');
myPara.textContent = 'Is JS working?';
const myImg = document.createElement('img');
myImg.src = bin;

document.body.appendChild(myPara);
document.body.appendChild(myImg);