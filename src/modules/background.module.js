// background.module.js
import {Module} from "../core/module";

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  // Функция для генерации случайного цвета
  #getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Функция для создания градиента
  #getRandomGradient() {
    const color1 = this.#getRandomColor();
    const color2 = this.#getRandomColor();
    return `linear-gradient(135deg, ${color1}, ${color2})`;
  }

  #applyBackground() {
    // Меняем фон страницы на случайный градиент
    document.body.style.background = this.#getRandomGradient();
  }

  trigger() {
    this.#applyBackground();
  }

  // Останавливает смену фона, возвращая его в белый цвет
  stop() {
    document.body.style.background = "#FFFFFF";
  }
}