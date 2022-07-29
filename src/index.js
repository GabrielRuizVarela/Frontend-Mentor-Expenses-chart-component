import './style.scss';
import generateBars from './DOM';
import logo from './logo.svg';

generateBars(document.querySelector('#bars'));
document.querySelector('img').src = logo;
