import './styles.css';
import {ContextMenu} from "./menu.js";

import {BackgroundModule} from "./modules/background.module.js";
import {ClicksModule} from "./modules/clicks.module.js";
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
menu.add(backgroundModule);
const clickModule = new ClicksModule('clicks-module', 'Подсчет кликов');
menu.add(clickModule);
const randomQuote = new RandomQuote('random-quote', 'Случайная цитата');
menu.add(randomQuote);
const randomSound = new RandomSound('random-sound', 'Случайный звук');
menu.add(randomSound);
// const shapeModule = new ShapeModule('shape-module', 'Нарисовать фигуру');
// menu.add(shapeModule);
const timerModule = new TimerModule('timer-module', 'Обратный отсчет');
menu.add(timerModule);