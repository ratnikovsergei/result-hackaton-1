import './styles.css';
import {ContextMenu} from "./menu.js";

import {BackgroundModule} from "./modules/background.module.js";
import {RandomSound} from "./modules/randomsounds.module.js";
import {RandomQuote} from "./modules/quote.module.js";

const menu = new ContextMenu('#menu');

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  menu.open(e.clientX, e.clientY);
});

const backgroundModule = new BackgroundModule('background', 'Случайный фон');
menu.add(backgroundModule);
const randomSound = new RandomSound('random-sound', 'Случайный звук');
menu.add(randomSound);
const randomQuote = new RandomQuote('random-quote', 'Случайная цитата');
menu.add(randomQuote);