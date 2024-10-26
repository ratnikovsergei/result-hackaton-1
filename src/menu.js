import {Menu} from './core/menu';

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.modules = [];
  }

  open(x, y) {

    /* реализация, чтобы меню оставалось в пределах экрана */
    const menuWidth = this.el.offsetWidth;
    const menuHeight = this.el.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const corX = Math.min(x, windowWidth - menuWidth);
    const corY = Math.min(y, windowHeight - menuHeight);

    this.el.className = 'menu open';
    this.el.style.left = `${corX}px`;
    this.el.style.top = `${corY}px`;

    this.el.innerHTML = this.modules.map(module => module.toHTML()).join('');

    /*     здесь обработчик событий на добавленные элементы (модули)
        при клике на них будет вызываться метод trigger() от каждого модуля */
    this.el.addEventListener('click', (e) => {
      const type = e.target.dataset.type;
      const module = this.modules.find(m => m.type === type);
      if (module) {
        module.trigger();
      }
    });
  }

  close() {
    this.el.className = 'menu';
  }

  add(module) {
    this.modules.push(module);
  }
}