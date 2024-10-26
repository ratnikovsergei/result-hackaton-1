import {Module} from "../core/module";
import {getRandomGradient} from "../utils.js";

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  #applyBackground() {
    // Меняем фон страницы на случайный градиент
    document.body.style.background = getRandomGradient();
  }

  trigger() {
    this.#applyBackground();
  }
}