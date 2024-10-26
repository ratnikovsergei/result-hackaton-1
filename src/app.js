import './styles.css';
import {ContextMenu} from "./menu.js";

import {BackgroundModule} from "./modules/background.module.js";
import {RandomSound} from "./modules/randomsounds.module.js";

const menu = new ContextMenu('#menu');

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  menu.open();
});

const backgroundModule = new BackgroundModule('background', 'Случайный фон');
menu.add(backgroundModule);
const randomSound = new RandomSound('random-sound', 'Случайный звук');
menu.add(randomSound);