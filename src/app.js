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

const modules = [
  {module: BackgroundModule, type: 'random-background-color', text: 'Случайный фон'},
  {module: ClicksModule, type: 'clicks-analytics-module', text: 'Подсчет кликов'},
  {module: ModalModule, type: 'modal-window-module', text: 'Модальное окно'},
  {module: RandomQuote, type: 'random-quote-module', text: 'Случайная цитата'},
  {module: RandomSound, type: 'random-sound-module', text: 'Случайный звук'},
  {module: ShapeModule, type: 'shape-module', text: 'Рисуем фигуры'},
  {module: TimerModule, type: 'timer-module', text: 'Обратный отсчет'}
];

modules.forEach(({module, type, text}) => {
  const setModule = new module(type, text);
  menu.add(setModule);
});
