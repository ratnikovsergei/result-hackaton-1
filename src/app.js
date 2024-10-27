import './styles.css';
import {ContextMenu} from "./menu.js";

import {BackgroundModule} from "./modules/background.module.js";
import {ClicksModule} from "./modules/clicks.module.js";
import {ModalModule} from "./modules/modal.module.js";
import {RandomQuote} from "./modules/quote.module.js";
import {RandomSound} from "./modules/randomsounds.module.js";
import {ShapeModule} from "./modules/shape.module.js";
import {TimerModule} from "./modules/timer.module.js";


const menu = new ContextMenu('#menu');

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  menu.open(e.clientX, e.clientY);
});

const backgroundModule = new BackgroundModule('background', 'Случайный фон');
const clickModule = new ClicksModule('clicks-module', 'Подсчет кликов');
const modalModule = new ModalModule('modal-module', 'Модальное окно');
const randomQuote = new RandomQuote('random-quote', 'Случайная цитата');
const randomSound = new RandomSound('random-sound', 'Случайный звук');
const shapeModule = new ShapeModule('shape-module', 'Нарисовать фигуру');
const timerModule = new TimerModule('timer-module', 'Обратный отсчет');

menu.add(backgroundModule);
menu.add(clickModule);
menu.add(modalModule);
menu.add(randomQuote);
menu.add(randomSound);
menu.add(shapeModule);
menu.add(timerModule)

