import {BackgroundModule} from "./background.module.js";
import {ClicksModule} from "./clicks.module.js";
import {ModalModule} from "./modal.module.js";
import {RandomQuote} from "./quote.module.js";
import {RandomSound} from "./randomsounds.module.js";
import {ShapeModule} from "./shape.module.js";
import {TimerModule} from "./timer.module.js";

export const modules = [
  {module: BackgroundModule, type: 'random-background-color', text: 'Случайный фон'},
  {module: ClicksModule, type: 'clicks-analytics-module', text: 'Подсчет кликов'},
  {module: ModalModule, type: 'modal-window-module', text: 'Модальное окно'},
  {module: RandomQuote, type: 'random-quote-module', text: 'Случайная цитата'},
  {module: RandomSound, type: 'random-sound-module', text: 'Случайный звук'},
  {module: ShapeModule, type: 'shape-module', text: 'Рисуем фигуры'},
  {module: TimerModule, type: 'timer-module', text: 'Обратный отсчет'}
];